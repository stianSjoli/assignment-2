FROM node:latest as buildFrontend

COPY package-lock.json package.json src/
COPY dist/index.html src/dist/index.html
COPY webpack.config.js src/webpack.config.js
COPY .babelrc src/
COPY src src/src
WORKDIR src/
RUN npm ci
RUN npm run build

FROM golang:alpine AS buildBackend
RUN apk --no-cache add build-base git mercurial gcc
RUN go get github.com/gin-gonic/gin
RUN go get github.com/gin-contrib/static
ENV PORT 8080
COPY server.go /src/server.go
RUN cd /src && go build -o goapp

# final stage
FROM alpine
ENV port 8080
EXPOSE ${port}
WORKDIR /app
COPY --from=buildBackend /src/goapp /app/
COPY --from=buildFrontend /src/dist /app/build/
ENTRYPOINT ./goapp

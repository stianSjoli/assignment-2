#This is the implementation of assignment 2: User authentication 

## How to run the code 

### Docker

This requires docker installed on the machine (requiring Docker 17.05 or higher), and a running docker deamon. 

in a terminal (in the project root where Dockerfile is):
```
docker build . -t "assignment-2"
docker run -p 9000:9000 "assignment-1" (exit (ctrl-c) when done)
```

### NPM

This requires that node and npm are installed on the machine.  This can be done according to guide on the nodejs website [nodejs](https://nodejs.org/en/download/). 
This should be the only dependency, if I am not mistaken. 
 

in a terminal (in the project root where package-lock.json is):
```
npm ci 
npm run start 
```

npm ci should install dependencies for the assignment in a new subfolder in the project node_modules from the package-lock file. This should make the application available on localhost and port 9000 in your browser.   

#### Tests 
More tests on each function (unit tests) can be runned by: 
 ```
 npm ci 
 npm test 
 ```
This should show 33 passing tests. 
 
#### Comments 
This assignment was implemented in react and javascript. 
It was mostly tested in Chrome browser (Version 85.0.4183.102). I should also mention that I have reused server.go and the dockerfile from earlier works (published on github). 
I was wondering if I should site my github, but chose not to because those files are not related to the implementation of the password-checker assignment only the delivery vessel and thus will not affect the score.  Such a reference would reveal my identity when you should only have my student id number.  
 


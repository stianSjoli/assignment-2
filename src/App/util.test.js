import {hasNumber, isNotBlackListedWord} from "./util";

const {isSame, hasUpperCase, hasSpecialCharacter, hasNoConsectiveLetters, hasLowerCase, isNotPalindrome, correctLength} = require("./util.js")

describe("util", () => {
    describe("isSame", () => {
        test('test === test', () => {
            expect(isSame("test", "test")).toBeTruthy();
        });
        test('test === te', () => {
            expect(isSame("test", "te")).toBeFalsy();
        });
    })
    describe("isNotPalindrome", () => {
        test('sas is a palindrome', () => {
            expect(isNotPalindrome("sas")).toBeFalsy();
        });
        test('anna is a palindrome', () => {
            expect(isNotPalindrome("anna")).toBeFalsy();
        });
        test('test is not a palindrome', () => {
            expect(isNotPalindrome("test")).toBeTruthy();
        });
        test('daylight is not a palindrome', () => {
            expect(isNotPalindrome("daylight")).toBeTruthy();
        });
    })
    describe("hasNoConsectiveLetters", () => {
        test('ssa is consective', () => {
            expect(hasNoConsectiveLetters("ssa")).toBeFalsy();
        });
        test('ass is consective', () => {
            expect(hasNoConsectiveLetters("ass")).toBeFalsy();
        });
        test('as is not consective', () => {
            expect(hasNoConsectiveLetters("as")).toBeTruthy();
        });
        test('test is not consective', () => {
            expect(hasNoConsectiveLetters("test")).toBeTruthy();
        });
    })
    describe("hasSpecialCharacter", () => {
        test('ssa is consective', () => {
            expect(hasSpecialCharacter("s#sa")).toBeTruthy();
        });
        test('ass is consective', () => {
            expect(hasSpecialCharacter("as!s")).toBeTruthy();
        });
        test('as is not consective', () => {
            expect(hasSpecialCharacter("as")).toBeFalsy();
        });
        test('test is not consective', () => {
            expect(hasSpecialCharacter("test")).toBeFalsy();
        });
    })
    describe("hasUpperCase", () => {
        test('tEst has a upper case', () => {
            expect(hasUpperCase("tEst")).toBeTruthy();
        });
        test('anna has no upper cases', () => {
            expect(hasUpperCase("anna")).toBeFalsy();
        });
        test('tesT has a upper case', () => {
            expect(hasUpperCase("tesT")).toBeTruthy();
        });
        test('test has no upper case', () => {
            expect(hasUpperCase("test")).toBeFalsy();
        })
    })
    describe("hasNumber", () => {
        test("te1st should contain a number", () =>{
            expect(hasNumber("te1st")).toBeTruthy()
        })
        test("test should not contain a number", () =>{
            expect(hasNumber("test")).toBeFalsy()
        })
        test("ANN13 should  contain a number", () =>{
            expect(hasNumber("ANN12")).toBeTruthy()
        })
        test("ANN should not contain a number", () =>{
            expect(hasNumber("ANN")).toBeFalsy();
        })
    })
    describe("isNotBlacklistedWord", () => {
        test("test is a dictionary word", () => {
            expect(isNotBlackListedWord("test")).toBeFalsy()
        })
        test("security is not a dictionary word", () => {
            expect(isNotBlackListedWord("security")).toBeTruthy()
        })
    })
    describe("hasLowerCase", () => {
        test('empty string has no lowercase', () => {
            expect(hasLowerCase("")).toBeFalsy();
        });
        test('Test has a lower case ', () => {
            expect(hasLowerCase("TeST")).toBeTruthy();
        });
        test('ANNA has no lower cases', () => {
            expect(hasLowerCase("ANNA")).toBeFalsy();
        });
        test('tesT has lower cases', () => {
            expect(hasLowerCase("TESt")).toBeTruthy();
        });
        test('TEST has no lower cases', () => {
            expect(hasLowerCase("TEST")).toBeFalsy();
        })
    })
    describe("correctLength", () => {
        test('correctLength for 8', () => {
            expect(correctLength("12345678")).toBeTruthy();
        });
        test('correctlength for 4', () => {
            expect(correctLength("anna")).toBeFalsy();
        });
        test('correctLength for 25', () => {
            expect(correctLength("1234567891011122334353445")).toBeTruthy();
        });
        test('correctLength for 1', () => {
            expect(correctLength("1")).toBeFalsy();
        });
    })
})


import dictionary from './dictionary.js';

const isSame = (oldPassword, newPassword) => oldPassword === newPassword;

const correctLength = (password) => password.split("").length >= 8;

const isNotPalindrome = (password) => {
    const passwordLetters = password.split("");
    const reversedPasswordLetters = passwordLetters.reverse();
    return !(reversedPasswordLetters.join("") === password);
}

const hasUpperCase = (password) => password.split("").some(c => c.toUpperCase() === c);

const hasLowerCase = (password) => password.split("").some(c => c.toLowerCase() === c);

const hasNumber = (password) => password.match(/\d+/g);

const hasNoConsectiveLetters = (password) => {
    const alphabet = "abcdefghijklmnopqrstuvwqyz".split("");
    for(let i = 0; i < password.length - 1; i++){
        if(password[i] === password[i+1] && alphabet.includes(password[i].toLowerCase())) {
            return false;
        }
    }
    return true;

}
const isNotBlackListedWord = (password) => {
    return !dictionary.includes(password);
}
const hasSpecialCharacter = (password) => {
    const specialCharacter = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    return password.split("").some(c => specialCharacter.includes(c))
}
const checkPasswordAgainstRules = (password) => {
    const policies = [isNotBlackListedWord, hasSpecialCharacter, hasNumber, isNotPalindrome, correctLength, hasLowerCase, hasUpperCase, hasNoConsectiveLetters];
    return policies.map(f => f(password));
}
const satisfiesPasswordPolicy = (password) => {
    const result = checkPasswordAgainstRules(password);
    return result.filter(res => res).length / result.length;
}

export {isSame, hasUpperCase, hasLowerCase, satisfiesPasswordPolicy, isNotBlackListedWord, hasSpecialCharacter, hasNoConsectiveLetters, hasNumber, correctLength, isNotPalindrome};

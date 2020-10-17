import React,{useState} from 'react';
import {
    correctLength,
    hasNoConsectiveLetters,
    hasLowerCase,
    hasNumber,
    hasSpecialCharacter,
    hasUpperCase, isNotBlackListedWord, isNotPalindrome,
    isSame, satisfiesPasswordPolicy
} from "./util";

const App = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [enteredPassword, setEnteredPassword] = useState(false);
    const satisfiesPasswordQualityResults = satisfiesPasswordPolicy(newPassword);
    return <div>
        <h1>Assignment 2</h1>
        <div>
            old password: <input value={oldPassword} placeholder={"enter old password"} onChange={e => setOldPassword(e.target.value)} required={true}/>
            new password: <input value={newPassword} placeholder={"enter new password"} onChange={e => setNewPassword(e.target.value)} required={true}/>
            <button onClick={() => setEnteredPassword(true)}>Submit</button>
        </div>
        {enteredPassword ?
            <div>
            <div>
                <h3> Password strength </h3>
                <div>{satisfiesPasswordQualityResults} </div>
            </div>
            <div>
            < h3 > Rule Results</h3>
            <ol>
            <li>Same: {isSame(oldPassword, newPassword) ? 'failed' : 'passed'} </li>
            <li>Upper case: {hasUpperCase(newPassword) ? 'passed' : 'failed'} </li>
            <li>Lower case: {hasLowerCase(newPassword) ? 'passed' : 'failed'} </li>
            <li>Length: {correctLength(newPassword) ? 'passed' : 'failed'} </li>
            <li>Number: {hasNumber(newPassword) ? 'passed' : 'failed'} </li>
            <li>Consective letters: {hasNoConsectiveLetters(newPassword) ? 'passed' : 'failed'} </li>
            <li>Palindrome: {isNotPalindrome(newPassword) ? 'passed' : 'failed'} </li>
            <li>Special character: {hasSpecialCharacter(newPassword) ? 'passed' : 'failed'} </li>
            <li>Is not a blacklisted word: {isNotBlackListedWord(newPassword) ? 'passed' : 'failed'} </li>
            </ol>
            </div>
                <div>{isSame(oldPassword, newPassword) ? <div>Failed mandatory rule - try again</div>:
                    <div>{satisfiesPasswordQualityResults > 0.5 ? "Well Done! Good to Go": "password is too weak to store, Try again"}</div>
                }</div>
            </div>:<div></div>}
    </div>

};

export default App;

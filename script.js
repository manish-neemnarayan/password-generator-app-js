const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

let generatedPass = "";

clipboardEl.addEventListener('click', () => {
    navigator.clipboard.writeText(generatedPass).
        then(() => alert("Password copied to clipboard!")).
        catch(err => alert("Not able to copy!"));
})

generateEl.addEventListener('click', () => {
    generatedPass = generatePassword();
    resultEl.textContent = generatedPass;
})

function generatePassword() {
    let arrMethods = [];
    let arr = [];
    uppercaseEl.checked ? arrMethods.push(getRandomUpper) : "";
    lowercaseEl.checked ? arrMethods.push(getRandomLower) : "";
    numbersEl.checked ? arrMethods.push(getRandomNumber) : "";
    symbolsEl.checked ? arrMethods.push(getRandomSymbol) : "";

    for(let i=0; i<lengthEl.value; i++) {
        let randNum = Math.floor(Math.random() * arrMethods.length);
        arr.push(arrMethods[randNum]());
    }
    let pass = arr.slice(0, lengthEl.value).join("");
    return pass;
}

function getRandomLower() {
    const arr = "abcdefghijklmnopqrstuvwxyz";
    let randNum = arr[Math.floor(Math.random() * arr.length)];
    return randNum;
}


function getRandomUpper() {
    const arr = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
    let randNum = arr[Math.floor(Math.random() * arr.length)];
    return randNum;
}

function getRandomNumber() {
    let randNum = Math.floor(Math.random() * 9);
    return randNum;
}

function getRandomSymbol() {
    const arr = "!@#$%^&*";
    let randNum = arr[Math.floor(Math.random() * arr.length)];
    return randNum;
}
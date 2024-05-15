const passwordBox = document.getElementById("Password");
const copyPassword = document.getElementById("copypassword");
const clickBtn = document.getElementById("btn");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";

const allChar = upperCase + lowerCase + number + symbol;

clickBtn.addEventListener("click", ()=>{
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() *lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passwordBox.value = password;
})

copyPassword.addEventListener("click", ()=>{
    passwordBox.select();
    document.execCommand("copy") 
})
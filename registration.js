let nameValue;
let lastNameValue;
let emailValue;
let twoNameStr;
let twoLastNameStr;
let randomStr;
let randomLength;
let randomNumbers;
let fontLayout = document.querySelector('#form-layout');
let passwordLayout = document.querySelector('#password-layout');
let passwordGenerated = document.querySelector('#passwordGenerated');
let userName = document.querySelector('#user-name');
let yes = document.querySelector('#yes');
let no = document.querySelector('#no');
let getPassword =  document.querySelector('#getPassword');
let sub = document.querySelector('#sub');
let userPasswordChoice = document.querySelector('#userPasswordChoice');
let employeeInput = document.querySelector('#employee-input');
let userChoice = document.querySelector('#userChoice');
let userInput = document.querySelector('#userInput');
let dashboard = document.querySelector('#dashboard');
let userArray = [];
let userObject;
let id = 1;
let ownPassword;
let passwordBoolean = true;
let employeeLog = "";


//collect inputs from the form when submit button is clicked
const inputValues = (event) => {
    nameValue = document.querySelector("#name").value;
    lastNameValue = document.querySelector("#lastname").value;
    emailvalue = document.querySelector("#email").value;
    passwordBoolean = true;

        generatePassword();
        displayPassword();
        
        
    console.log(nameValue);
    employeeInput.reset();

    event.preventDefault();

}

//generate password
const generatePassword = () => {
     twoNameStr = nameValue.slice(0, 2);
     twoLastNameStr = lastNameValue .slice(-2);

     randomStr = "abcdefghijklmnopqrstuvwxyz0123456789";
    randomLength  = 5;
     randomNumbers = twoNameStr + twoLastNameStr;
    for (var i = 0, n = randomStr.length; i < randomLength; ++i) {
        randomNumbers += randomStr.charAt(Math.floor(Math.random() * n));
    } 

    console.log(twoNameStr, twoLastNameStr, randomNumbers);

    return randomNumbers;
}

//display password message
const displayPassword = () => {
    //display password 
    passwordLayout.style.display = "block";
    getPassword.style.display = 'none'
    fontLayout.style.display = "none";
    userName.innerHTML = nameValue;
    passwordGenerated.innerHTML = randomNumbers;
}



 const yesClick = () => {
    userObject= {
        id: id,
        name : nameValue,
        lastName : lastNameValue,
        password :  randomNumbers

}

userArray.push(userObject);
id++

userInput.innerHTML = "Name: " + userObject.name + '<br>' + "Last-Name: " + userObject.lastName + '<br>' + "password : " + userObject.password;
passwordLayout.style.display = "none";
dashboard.style.display = "block";
console.log(userArray);
console.log(userObject);

 }



const noClick = () => {
    getPassword.style.display = 'block'
};



//user password in case they dont like the genrated password.
const subClick = () =>{
    ownPassword = userPasswordChoice.value;
    
    userObject= {
        id: id,
        name : nameValue,
        lastName : lastNameValue,
        password :  ownPassword

}

userArray.push(userObject);
id++
userInput.innerHTML = "Name: " + userObject.name + '<br>' + "Last-Name: " + userObject.lastName + '<br>' + "password : " + userObject.password;
userChoice.reset();
console.log(userArray);
    console.log(ownPassword);
    passwordLayout.style.display = "none";
    dashboard.style.display = "block";
}

const next = () => {
    passwordLayout.style.display = "none";
    dashboard.style.display = "none";
    fontLayout.style.display = "block"; 
}

const finish = (event) => {
    for(let i=0; i<userArray.length; i++){
       
        employeeLog += userArray[i].id + '<br>' + "Name: " + userArray[i].name + '<br>' + "Last-Name: " + userArray[i].lastName + '<br>' + "password : " + userArray[i].password + '<br>';
        
    }
    userInput.innerHTML = employeeLog;
    console.log(userArray, 'userArray');

    event.preventDefault();

    
};


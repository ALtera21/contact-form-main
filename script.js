function errorFirstName(){
    const firstName = document.getElementById('first');
    const firstNameValue = firstName.value;
    const errorFirstName = document.querySelector('.errorFirstName');

    if(firstNameValue == ""){
        firstName.style.outline = '1px solid red';
        errorFirstName.innerHTML = 'This field is required';
    }
    else{
        firstName.style.outline = '1px solid hsl(186, 15%, 59%)';
        errorFirstName.innerHTML = '';
    }
}

document.getElementById('submit').addEventListener('click', () => errorFirstName());

function errorLastName(){
    const lastName = document.getElementById('last');
    const lastNameValue = lastName.value;
    const errorLastName = document.querySelector('.errorLastName');

    if(lastNameValue == ""){
        lastName.style.outline = '1px solid red';
        errorLastName.innerHTML = 'This field is required';
    }
    else{
        lastName.style.outline = '1px solid hsl(186, 15%, 59%)';
        errorLastName.innerHTML = '';
    }
}

document.getElementById('submit').addEventListener('click', () => errorLastName());

function errorEmail(){
    const email = document.getElementById('email');
    const emailValue = email.value;
    const errorEmail = document.querySelector('.errorEmail');

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(emailValue == ""){
        email.style.outline = '1px solid red';
        errorEmail.innerHTML = 'This field is required';
    }

    else if(emailRegex.test(emailValue)){
        email.style.outline = '1px solid hsl(186, 15%, 59%)';
        errorEmail.innerHTML = '';
    }

    else{
        email.style.outline = '1px solid red';
        errorEmail.innerHTML = 'Please enter a valid email address';
    }
}

document.getElementById('submit').addEventListener('click', () => errorEmail());

function errorQuery(){
    const enquery = document.getElementById('enquery');
    const support = document.getElementById('support');
    const errorQuery = document.querySelector('.errorQuery');

    if(enquery.checked || support.checked){
        errorQuery.innerHTML = '';
        
    }
    else{
        errorQuery.innerHTML = 'Please select a query type';
    }
}

document.getElementById('submit').addEventListener('click', () => errorQuery());

function errorMessage(){
    const message = document.getElementById('message');
    const messageValue = message.value;
    const errorMessage = document.querySelector('.errorMessage');

    if(messageValue == ""){
        message.style.outline = '1px solid red';
        errorMessage.innerHTML = 'This field is required';
    }
    else{
        message.style.outline = '1px solid hsl(186, 15%, 59%)';
        errorMessage.innerHTML = '';
    }
}

document.getElementById('submit').addEventListener('click', () => errorMessage());

function errorCheckBox(){
    const checkBox = document.getElementById('checkbox');
    const errorCheckBox = document.querySelector('.errorCheckBox');

    if(checkBox.checked){
        errorCheckBox.innerHTML = '';
        
    }
    else{
        errorCheckBox.innerHTML = 'To submit this form, please consent to being contacted';
    }
}

document.getElementById('submit').addEventListener('click', () => errorCheckBox());

function noError(){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    const submit = document.getElementById('sent');

    const firstName = document.getElementById('first');
    const firstNameValue = firstName.value;

    const lastName = document.getElementById('last');
    const lastNameValue = lastName.value;

    const email = document.getElementById('email');
    const emailValue = email.value;

    const enquery = document.getElementById('enquery');
    const support = document.getElementById('support');

    const message = document.getElementById('message');
    const messageValue = message.value;

    const checkBox = document.getElementById('checkbox');

    if(firstNameValue == "" || lastNameValue == "" || emailValue == "" || !emailRegex.test(emailValue) || !(enquery.checked || support.checked) || messageValue == "" || !checkBox.checked){
        submit.style.opacity = 0;
    }
    else{
        submit.style.opacity = 1;
    }
}

document.getElementById('submit').addEventListener('click', () => noError());



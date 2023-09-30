const containerE1 = document.getElementById('container')
const leftE1 = document.getElementById('left');
const rightE1 = document.getElementById('right');

const userEmailE1 = document.getElementById('user-email');
const invalidEmailE1 = document.getElementById('invalid-email');
const emailInput = document.getElementById('email');
const submitBtnE1 = document.getElementById('submit-btn');

const confirmedMessageE1 = document.getElementById('confirmed-message');
const dismissMessageE1 = document.getElementById('dismiss-message');

function formSuccess(){
    confirmedMessageE1.classList.add('active');
    containerE1.classList.add('success');
    leftE1.style.display = 'none';
    rightE1.style.display = 'none';
}

function validateEmail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

submitBtnE1.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if(validateEmail(email)){
        formSuccess();
        userEmailE1.innerHTML = email;
        emailInput.value = '';

        invalidEmailE1.classList.remove('active');
        emailInput.classList.remove('active');
    }
    else{
        invalidEmailE1.classList.add('active');
        emailInput.classList.add('active');
    }
});

dismissMessageE1.addEventListener('click', () =>{
    leftE1.style.display = 'block';
    rightE1.style.display = 'block';
    containerE1.classList.remove('success');
    confirmedMessageE1.classList.remove('active');
});
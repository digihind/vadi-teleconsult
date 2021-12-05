
const sign_in_btn = document.querySelector('#sign-in-button');
const sign_up_btn = document.querySelector('#sign-up-button');
const container = document.querySelector('.container');

sign_up_btn.addEventListener("click", function () {
    container.classList.add('sign-up-mode');
    container.classList.remove('sign-in-mode');
});

sign_in_btn.addEventListener("click", function () {
    container.classList.remove('sign-up-mode');
    container.classList.add('sign-in-mode');
});
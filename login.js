
var sign_in_btn = document.querySelector('#sign-in-button');
var sign_up_btn = document.querySelector('#sign-up-button');
var container = document.querySelector('.container');
// console.log(sign_in_btn.innerHTML);
sign_up_btn.addEventListener("click", function(){
    container.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener("click", function(){
    container.classList.remove('sign-up-mode');
});
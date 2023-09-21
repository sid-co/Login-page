const outboxes = document.querySelector('.outbox');
const registerbox = document.querySelector('.register-link');
const loginbox = document.querySelector('.login-link');
const taplogin = document.querySelector('.logon');
const iconclose = document.querySelector('.exit');


registerbox.addEventListener('click', () => {
    outboxes.classList.add('active');
});
loginbox.addEventListener('click', () => {
    outboxes.classList.remove('active');

});
taplogin.addEventListener('click', () => {
    outboxes.classList.add('active-popup');
});
iconclose.addEventListener('click', () => {
    outboxes.classList.remove('active-popup');

});
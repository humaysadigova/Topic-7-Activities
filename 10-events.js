const userText = document.querySelector('#user-text');

document.onkeyup = function(event) {
    userText.textContent = event.key;
};
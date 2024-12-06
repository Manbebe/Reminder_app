let remindSubmit = document.querySelector('.remind-submit');
const leftButton = document.querySelector('.leftbutton');
const rightButton = document.querySelector('.rightbutton');
const submitButton = document.querySelector('.submit');
let score = document.querySelector('.score')
const reminderInput = document.querySelector('.reminder-input')
const title = document.querySelector('.title')
let reminder = document.querySelector('.reminder')
let reminderText = document.querySelector('.reminder-input').value;
let reminders = ['walk dog', 'do hw', 'go to tennis']

document.querySelector('.submit').addEventListener('click', function() {
    // Your code here
});

let newReminder = document.createElement('div');

newReminder.className = 'reminder';

newReminder.innerHTML = `<p>${reminderText}</p>`;

document.querySelector('.textbox').appendChild(newReminder);
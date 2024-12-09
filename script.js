let remindSubmit = document.querySelector('.remind-submit');
const leftButton = document.querySelector('.leftbutton');
const rightButton = document.querySelector('.rightbutton');
const submitButton = document.querySelector('.submit');
let counter = document.querySelector('#counter')
const reminderInput = document.querySelector('.reminder-input')
const title = document.querySelector('.title')
let reminder = document.querySelector('.reminder')
let reminders = ['walk dog', 'do hw', 'go to tennis']
let currentIndex = -1;



document.querySelector('.submit').addEventListener('click', function() {
    let reminderText = document.querySelector('.reminder-input').value;
    reminders.push(reminderText);
    console.log(reminders); // Check the array in the console

    // Update the counter to show the current reminder index

    // Add the reminder to the DOM as well
    let newReminder = document.createElement('div');
    newReminder.className = 'reminder';
    newReminder.innerHTML = `<p>${reminderText}</p>`;
    document.querySelector('.reminder-input').value = ""; // Clear the input field
});



function updateReminder() {
    reminder.innerHTML = `<p>${reminders[currentIndex]}</p>`;
}

leftButton.addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
        updateReminder();
        updateCounter();
    }
});

rightButton.addEventListener('click', function() {
    if (currentIndex < reminders.length - 1) {
        currentIndex++;
        updateReminder();
        updateCounter();
    }
});

function updateCounter() {
    const counter = document.getElementById('counter');
    counter.innerText = currentIndex + 1;
    counter.classList.remove('animate');
    void counter.offsetWidth; // Trigger reflow to restart the animation
    counter.classList.add('animate');
}
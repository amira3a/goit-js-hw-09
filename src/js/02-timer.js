import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";
const options = document.getElementById('datetime-picker');
const startButton = document.querySelector('button[data-start]');
 const timerEl = document.querySelector('timer');
let selectedDate;

flatpickr(options, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    
    if (selectedDate < new Date()) {
      window.alert("Please choose a date in the future");
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  }
})


function addLeadingZero(options) {
   return String(options).padStart(2, '0');
}
let endDate = new Date();
const remainingTime = convertMs(endDate);

function convertMs(endDate) {
  const remainingTime = endDate - Date.now();
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  
  return { days, hours, minutes, seconds };
}

const daysEl = document.querySelector('span[data-days]');
daysEl.textContent = addLeadingZero(remainingTime.days);

const hoursEl = document.querySelector('span[data-hours]');
hoursEl.textContent = addLeadingZero(remainingTime.hours);

const minutesEl = document.querySelector('span[data-minutes]');
minutesEl.textContent = addLeadingZero(remainingTime.minutes);

const secondsEl = document.querySelector('span[data-seconds]');
secondsEl.textContent = addLeadingZero(remainingTime.seconds);


startButton.addEventListener('submit', () => {
    convertMs();
    const timerInterval = setInterval(convertMs, 1000);
  })


  
  
  


  
    
   




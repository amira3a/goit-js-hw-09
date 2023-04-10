import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";

const options = document.getElementById('datetime-picker');
const startButton = document.querySelector('button[data-start]');
const timerEl = document.querySelector('timer');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

let selectedDate;

flatpickr(options, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    
    if (selectedDate < new Date()) {
      Notiflix.Notify.warning("Please choose a date in the future");
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
});



function convertMs(ms) {
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
  function startCountdown(endDate) {
    const intervalId = setInterval(() => {
      const msLeft = endDate - new Date();
      if (msLeft <= 0) {
        clearInterval(intervalId);
        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";
        Notiflix.Notify.success("Time is up!");
      } else {
        let { days, hours, minutes, seconds } =
          convertMs(msLeft);
        daysEl.textContent = addLeadingZero(days);
        hoursEl.textContent = addLeadingZero(hours);
        minutesEl.textContent = addLeadingZero(minutes);
        secondsEl.textContent = addLeadingZero(seconds);
      }
    }, 1000);
}
  
  


  function addLeadingZero(value) {
    return value.toString().padStart(2, "0");
  }
  
  
 
startButton.addEventListener("click", () => {
    let endDate = new Date(options.value);
    startCountdown(endDate);
  });

  
    
   




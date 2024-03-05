// vars
const endDateText = document.querySelector('#endDateText');
const h3 = document.querySelectorAll('h3');
const endDateTS = 'March 6, 2024 14:30:00';

// deadline
endDateText.innerText = endDateTS;

function getDiffTime() {
  let endDate = new Date(endDateTS);
  let todayDate = new Date();
  let diff = (endDate - todayDate) / 1000;
  let day = Math.floor(diff / (24 * 3600));
  let hours = Math.floor((diff / 3600) % 24);
  let mins = Math.floor((diff / 60) % 60);
  let secs = Math.floor(diff % 60);
  h3[0].innerText = day;
  h3[1].innerText = hours;
  h3[2].innerText = mins;
  h3[3].innerText = secs;
}

getDiffTime();
setInterval(() => {
  getDiffTime();
}, 1000);

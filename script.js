`use strict`;
// * selector
const hourEl = document.querySelector(`.hours`);
const minuteEl = document.querySelector(`.minutes`);
const secondEl = document.querySelector(`.seconds`);
const formatEl = document.querySelector(`.format`);

const time = () => {
  let date = new Date();
  let hourVal = date.getHours();
  let minuteVal = date.getMinutes();
  let secondVal = date.getSeconds();

  if (hourVal > 12) {
    hourVal - 12;
  }
  if (hourVal == 0) {
    hourVal = 12;
  }

  formatEl.textContent = hourVal > 12 ? `AM` : `PM`;
  hourEl.textContent = hourVal < 10 ? `0${hourVal}` : hourVal;
  minuteEl.textContent = minuteVal < 10 ? `0${minuteVal}` : minuteVal;
  secondEl.textContent = secondVal < 10 ? `0${secondVal}` : secondVal;
};
setInterval(time, 1000);

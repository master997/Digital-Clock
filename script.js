"use strict";

// DOM Elements
const timerDisplay = document.querySelector(".time-display");
const toggle = document.querySelector(".toggle-format");

let is24HourFormat = true; //boolean variable
const currentTime = function () {
  const time = new Date();
  //gets date from somehwere
  const pad = (number) => number.toString().padStart(2, 0); // Pad single digits

  let hours;
  let amPm;
  //initialize variables
  if (is24HourFormat) {
    hours = pad(time.getHours()); //24 hour time in hours
  } else {
    hours = pad(time.getHours() % 12 || 12); //gets remainder from hours or if 0 replaces it with 12 for 12 hour
    amPm = time.getHours() < 12 ? "AM" : "PM"; //gets number in 12 hours and decides if its am or pm by checkling if house is greater or less than 12
  }

  const minutes = pad(time.getMinutes());
  const seconds = pad(time.getSeconds());

  const formattedTime = is24HourFormat
    ? `${hours}:${minutes}:${seconds}`
    : `${hours}:${minutes}:${seconds} ${amPm}`;
  timerDisplay.textContent = formattedTime;

  return formattedTime;
};

const updateTime = function () {
  let interval = setInterval(currentTime, 1000); //calls function to how many secs here
};

toggle.addEventListener("click", function () {
  is24HourFormat = !is24HourFormat;
  currentTime();
});

updateTime();

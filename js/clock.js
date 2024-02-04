const clock = document.querySelector("h2#clock");
const day = document.querySelector("#date");

function getClock() {
  const time = new Date();
  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const seconds = String(time.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function getDate() {
  const date = new Date();
  day.innerText = `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일`;
}

getDate();
getClock();
setInterval(getClock, 1000);

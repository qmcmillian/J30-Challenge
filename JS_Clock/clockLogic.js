
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand =  document.querySelector('.hour-hand');

const setDate = () => {
  const now = new Date();
  // Seconds Logic
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds/ 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // Minutes Logic
  const minutes =  now.getMinutes();
  const minuteDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
}

setInterval(setDate, 1000);
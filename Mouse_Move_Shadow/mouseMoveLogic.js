console.log('Moving Tings')

const hero =  document.querySelector('.hero');
const text =  hero.querySelector('h1');
const walk = 100;

function shadow(event){
  const { offsetWidth : width, offsetHeight: height } = hero; // destructuring and giving them new variable names with the semi colon
  let { offsetX: x, offsetY: y } = event;

  if (this !== event.target) {
    x = x + event.target.offsetLeft;
    y = y + event.target.offsetTop;
  }

  const xWalk =  Math.round((x / width * walk) - (walk / 2));
  const yWalk =  Math.round((y / width * walk) - (walk / 2));

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`;
}

hero.addEventListener('mousemove', shadow)

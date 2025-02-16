const $ = el => document.querySelector(el);
const $$ = el => document.querySelectorAll(el);
const $body = $('.container');

function addStars() {
  let max = 300;
  for (let i = 0; i < max; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    let duration = Math.random() * 10 + 2;
    let size = Math.random() * 2 + 1;
    let x = ~~(Math.random() * window.innerWidth)
    let y = ~~(Math.random() * window.innerHeight)

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDelay = `${duration - 3}s`; 
    star.style.animationDuration = `${duration}s`; 

    $body.appendChild(star)
  }
}

addStars()

/* ======================= MEDIA  ======================= */

let w = window;

let currentOrientation = screen.orientation.type;

function handleOrientationChange() {
  const newOrientation = screen.orientation.type;

  if (
    newOrientation.startsWith('portrait') &&
    !currentOrientation.startsWith('portrait')
  ) {
    currentOrientation = newOrientation;
    location.reload();
  } else if (
    newOrientation.startsWith('landscape') &&
    !currentOrientation.startsWith('landscape')
  ) {
    currentOrientation = newOrientation;
    location.reload();
  }
}

screen.orientation.addEventListener('change', handleOrientationChange);

handleOrientationChange();

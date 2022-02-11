const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 500; // 100px

const shadow = (e) => {
  // const width = hero.offsetWidth;
  // const height = hero.offsetHeight;
  // or we can use ES6 destructuring:
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y} = e;

  if (e.currentTarget !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(27,27,27,0.9),
    ${xWalk * -1}px ${yWalk}px 0 rgba(114,114,114,0.9),
    ${yWalk}px ${xWalk * -1}px 0 rgba(58,58,58,0.9),
    ${yWalk * -1}px ${xWalk}px 0 rgba(107,107,107,0.9)
  `
}

hero.addEventListener('mousemove', shadow);

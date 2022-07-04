// Not a ton of code, but hard to
// const nav = document.querySelector('#main');
// let topOfNav = nav.offsetTop;

// function fixNav() {
//   if (window.scrollY >= topOfNav) {
//     document.body.style.paddingTop = nav.offsetHeight + 'px';
//     document.body.classList.add('fixed-nav');
//   } else {
//     document.body.classList.remove('fixed-nav');
//     document.body.style.paddingTop = 0;
//   }
// }

// window.addEventListener('scroll', fixNav);

const nav = document.getElementById('main');
let topOfNav = nav.offsetTop;

const fixNav = (e) => {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = `${nav.offsetHeight}px`;
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', fixNav)

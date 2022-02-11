const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

// we need to listen to the user geolocation
navigator.geolocation.watchPosition((data) => {
  console.log(data);
  speed.textContent = data.coords.speed;
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
  console.error(err);
});

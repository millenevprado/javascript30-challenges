const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(time => {
    const [mins, secs] = time.split(':').map(parseFloat);
    return (mins * 60) + secs;
  })
  .reduce((total, videoSeconds) => total + videoSeconds);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft %= 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft %= 60;

console.log(`Total time: ${hours} hours, ${mins} mins and ${secondsLeft} secs`)

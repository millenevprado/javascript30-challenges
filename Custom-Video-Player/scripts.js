// get the elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreen = player.querySelector('.fullscreen');

// build the functions
const togglePlay = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

const updateButton = (e) => {
  const icon = e.currentTarget.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
};

const skip = (e) => {
  video.currentTime += parseFloat(e.currentTarget.dataset.skip);
};

const handleRangeUpdate = (e) => {
  video[e.currentTarget.name] = e.currentTarget.value;
};

const handleProgress = (e) => {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
};

const scrub = (e) => {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

const handleFullscreen = () => {
  if (!document.fullscreenElement) {
    player.requestFullscreen()
  } else {
    document.exitFullscreen();
  }
}

// hook up the event listeners
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));

video.addEventListener('timeupdate', handleProgress);

progress.addEventListener('click', scrub);

let mousedown = false;
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullscreen.addEventListener('click', handleFullscreen);

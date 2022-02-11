// SpeechRecognition is a global variable that lives in the browser
// In chrome -> webkit
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// Create a new instance of speech recognition
const recognition = new SpeechRecognition();

// Set the iterim results of it so it populate while we are speaking
recognition.interimResults = true;
recognition.lang = 'en-US';

// Create a paragraph so we can put our results there
let p = document.createElement('p');
// Get the div and add the p to it
const words = document.querySelector('.words');
words.appendChild(p);

// Listen for the event results
recognition.addEventListener('result', e => {
  // Convert the nodeList into an array
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.textContent = transcript;
  if(e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }
});

// Listen for the end event, so when the event result end it will start again
recognition.addEventListener('end', recognition.start);

recognition.start();

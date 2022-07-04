const projects = [
  'JavaScript-Drum-Kit',
  'JS-and-CSS-Clock',
  'CSS-Variables',
  'Array-Cardio-Day-1',
  'Flex-Panel-Gallery',
  'Type-Ahead',
  'Array-Cardio-Day-2',
  'Fun-with-HTML5-Canvas',
  'Dev-Tools-Domination',
  'Hold-Shift-and-Check-Checkboxes',
  'Custom-Video-Player',
  'Key-Sequence-Detection',
  'Slide-in-on-Scroll',
  'JavaScript-References-VS-Copying',
  'LocalStorage',
  'Mouse-Move-Shadow',
  'Sort-Without-Articles',
  'Adding-Up-Times-with-Reduce',
  'Webcam-Fun',
  'Speech-Detection',
  'Geolocation',
  'Follow-Along-Link-Highlighter',
  'Speech-Synthesis',
  'Sticky-Nav'
];

const list = document.getElementById('list');

projects.forEach((project, i) => {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  const div = document.createElement('div');
  link.href = `./${project}/index.html`;
  div.innerText = `${i + 1}. ${project.split('-').join(' ')}`;

  const img = document.createElement('img');
  img.src = `./${project}/img.png`

  link.prepend(img);
  link.append(div);
  listItem.appendChild(link);
  list.appendChild(listItem);
});

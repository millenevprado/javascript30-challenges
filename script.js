const projects = [
  '01 - JavaScript Drum Kit',
  '02 - JS and CSS Clock',
  '03 - CSS Variables',
  '04 - Array Cardio Day 1',
  '05 - Flex Panel Gallery',
  '06 - Type Ahead',
  '07 - Array Cardio Day 2',
  '08 - Fun with HTML5 Canvas',
  '09 - Dev Tools Domination',
  '10 - Hold Shift and Check Checkboxes',
  '11 - Custom Video Player',
  '12 - Key Sequence Detection',
  '13 - Slide in on Scroll',
  '14 - JavaScript References VS Copying',
  '15 - LocalStorage',
  '16 - Mouse Move Shadow',
  '17 - Sort Without Articles',
  '18 - Adding Up Times with Reduce',
  '19 - Webcam Fun',
  '20 - Speech Detection',
  '21 - Geolocation'
];

const list = document.getElementById('list');

projects.forEach((project) => {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  const div = document.createElement('div');
  link.href = `/${project}/index-FINISHED.html`;
  div.innerText = project;

  const img = document.createElement('img');
  img.src = `/${project}/img.png`

  link.prepend(img);
  link.append(div);
  listItem.appendChild(link);
  list.appendChild(listItem);
});

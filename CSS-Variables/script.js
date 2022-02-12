// 1. select all the inputs
const inputs = document.querySelectorAll('.controls input');

// the main difference between a NodeList and an array is that the
// array has several methods we can use to deal with it (NodeList only
// has a few - check prototype).

// 2. create a function to handle update of the variables
const handleUpdate = (e) => {
  // dataset is an object that contain all the data attributes
  // from that specific element
  const suffix = e.currentTarget.dataset.sizing || '';
  // '' is for the color (var base)
  // 4. select the variables and update their values
  document.documentElement.style.setProperty(`--${e.currentTarget.name}`, e.currentTarget.value + suffix);
}

// 3. listen for a change event on each of the inputs
// and when the event is called we call handleUpdate
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

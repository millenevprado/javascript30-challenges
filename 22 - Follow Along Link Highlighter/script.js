// get all the links in the page
const triggers = document.querySelectorAll('a');

// create the span element
const highlight = document.createElement('span');
// add the class highlight to the span
highlight.classList.add('highlight');
// add span to the DOM
document.body.append(highlight);

// we need to listen when someone enters into a link

const highlightLink = (event) => {
  // get the position of the link in the page using getBoundingClientRect()
  // which returns a DOMRect object providing information about the size
  // of an element and its position relative to the viewport.
  const linkCoords = event.currentTarget.getBoundingClientRect();
  console.log(linkCoords);
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX
  }

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
};

// listen to mouseevent of each of our triggers
triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));


  // const triggers = document.querySelectorAll('a');
  // const highlight = document.createElement('span');
  // highlight.classList.add('highlight');
  // document.body.appendChild(highlight);

  // function highlightLink() {
  //   const linkCoords = this.getBoundingClientRect();
  // console.log(linkCoords);
  // const coords = {
  //   width: linkCoords.width,
  // height: linkCoords.height,
  // top: linkCoords.top + window.scrollY,
  // left: linkCoords.left + window.scrollX
  //   };

  // highlight.style.width = `${coords.width}px`;
  // highlight.style.height = `${coords.height}px`;
  // highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;

  // }

  // triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));

const container = document.querySelector('.container');
const style = getComputedStyle(container);

// Find the maximum width and height of the container
let containerMaxWidth = style.maxWidth; //returns 'XYZpx'
containerMaxWidth = containerMaxWidth.slice(0,-2); //last two chars of string is always 'px'
containerMaxWidth = parseInt(containerMaxWidth); 

let containerMaxHeight = style.maxHeight;
containerMaxHeight = containerMaxHeight.slice(0,-2);
containerMaxHeight = parseInt(containerMaxHeight);

console.log(containerMaxWidth);
console.log(containerMaxHeight);

const resetBtn = document.querySelector('.reset');
const sizeBtn = document.querySelector('.change-size');


let inputSize = 16; // by Default

console.log(document.styleSheets[0]['cssRules'][4].style['width']);

function changeSquareDimensions(newSize) {
  document.styleSheets[0]['cssRules'][4].style['width'] = `${newSize}px`;
  document.styleSheets[0]['cssRules'][4].style['height'] = `${newSize}px`;

}

function updateSquares (inputSize) {
  container.innerHTML='';
  for (let i = 0; i < inputSize; i++){
    for (let j = 0; j < inputSize; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      // console.log(square.style);
      if (inputSize !== 16) {
        let newSize = Math.floor(containerMaxWidth/inputSize);
        changeSquareDimensions(newSize);
      }
      container.appendChild(square);
    }
  };
  const allSquares = document.querySelectorAll('.square');

  allSquares.forEach(square => {
  square.addEventListener('mouseover', () => {
    // console.log('Square being hovered over.')
    square.classList.add('hover');
    // console.log(square.style);
  })
  });
  resetBtn.addEventListener('click', () => {
  allSquares.forEach(square => {
    square.classList.remove('hover');
  })
  })
}




sizeBtn.addEventListener('click', () => {
  console.log('size button click.')
  let newInputSize = prompt("Enter new nxn size (Max n=100)", "n");
  if (newInputSize > 100) {
    alert('Uh Oh! Max n is 100, you entered something bigger :(')
    return;
  }
  if (newInputSize !== null) {
    updateSquares(newInputSize);
  }
})

updateSquares(inputSize);
const container = document.querySelector('.container');
const btn = document.querySelector('.reset');



for (let i = 0; i < 16; i++){
  for (let j = 0; j < 16; j++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }
};

const allSquares = document.querySelectorAll('.square');

allSquares.forEach(square => {
  square.addEventListener('mouseover', () => {
    console.log('Square being hovered over.')
    square.classList.add('hover');
  })
});

btn.addEventListener('click', () => {
  allSquares.forEach(square => {
    square.classList.remove('hover');
  })
})
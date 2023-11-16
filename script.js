const container = document.querySelector('.container');



for (let i = 0; i < 16; i++){
  for (let j = 0; j < 16; j++) {
    let square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }
};

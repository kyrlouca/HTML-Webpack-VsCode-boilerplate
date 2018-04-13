import '../css/grid.css';
 import homeIcon from '../image/tree2.png';
// import '../css/web-fonts-with-css/css/fontawesome-all.css';

let winningArray = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
];

let stateArray = Array(9).fill(undefined);
let playerMap = new Map([['R', { color: 'Red' }], ['B', { color: 'Blue' }]]);

let player = 'R';
let winRow = [];

function displayMessage(message) {
  let isVisible = !!message;

  let element = document.querySelector('#mm');
  element.innerText = message;
  // element.innerText = 'baka'
  // !isVisible ? element.styel.visibility = ;
  element.style.visibility = isVisible ? 'visible' : 'hidden';
}

let findWinner = player => {
  var winRow = [];
  let isWin = winningArray.some(row => {
    winRow = row;
    return row.every(i => stateArray[i].tag === player);
  });
  return isWin ? winRow : [];
};
let isOver = ()=>{
  let x=false;
  x=stateArray.every((element)=>{
      element 
  });
}

let playerAction = event => {
  let box = event.target;

  if (box.tag) {
    return;
  }

  box.tag = player;
  box.innerText = player;
  box.classList.remove('gray');

  let color = player === 'R' ? 'red' : 'blue';
  box.classList.add(color);

  winRow = findWinner(player);
  if (winRow.length > 0) {
    displayMessage(`${playerMap.get(player).color}  ${winRow}`);
    // alert(winRow);
  }

  player = player === 'R' ? (player = 'B') : (player = 'R');
};

let gridBox = document.querySelector('.gridBox');
stateArray.forEach((element, index, array) => {
  let box = document.createElement('div');
  box.innerText = index;
  box.classList.add('gray');
  array[index] = box;
  gridBox.appendChild(box);
  box.addEventListener('click', playerAction);
});

let homeImg = document.getElementById('wpi');
homeImg.src = homeIcon;
export default winRow;

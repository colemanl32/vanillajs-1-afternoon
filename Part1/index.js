let arr = [];

function play(clickedId) {
    const playerSpan = document.getElementById('player');
    const clickedBox = document.getElementById(clickedId);

    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O';
        clickedBox.innerText = 'X';
        arr[clickedId] = 'X'
    } 
    else {
        playerSpan.innerText = 'X';
        clickedBox.innerText = 'O';
        arr[clickedId] = 'O';
    }

    let topLeft = arr[0];
    let topCenter = arr[1];
    let topRight = arr[2];
    let middleLeft = arr[3];
    let middleCenter = arr[4];
    let middleRight = arr[5];
    let bottomLeft = arr[6];
    let bottomCenter = arr[7];
    let bottomRight = arr[8];

    if(topLeft!== undefined && topLeft === topCenter && topLeft === topRight) {
        alert(`${topLeft} is the winner!!!`)
        return;
    }
    if(topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight){
        alert(`${topLeft} is the winner!!!`)
        return;
    }
    if(topLeft !== undefined && topLeft === middleLeft && topleft === bottomLeft){
        alert(`${topLeft} is the winner!!!`)
        return;
    }
    if(middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
        alert(`${middleLeft} is the winner!!!`)
        return;
    }
    if(bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
        alert(`${bottomLeft} is the winner!!!`)
        return;
    }
    if(topRight !== undefined && topRight === middleCenter && topRight === bottomLeft) {
        alert(`${topRight} is the winner!!!`)
        return;
    }
    if(topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
        alert(`${topCenter} is the winner!!!`)
        return;
    }
    if(topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        alert(`${topRight} is the winner!!!`)
        return;
    }
    let arrFull = true;
  for (let i = 0; i <= 8; i++) {
    if (arr[i] === undefined) {
      arrFull = false;
    }
  }
  if (arrFull === true) {
    alert("Cat's game, there is no winner");
  }}
  var btn = document.createElement('button');
  btn.innerHTML = 'Reset Board';
  document.body.appendChild(btn);
  btn.addEventListener ("click", resetBoard())


  function resetBoard() {
      arr.fill(arr, '')
  }













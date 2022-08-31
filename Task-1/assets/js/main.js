const squares = document.getElementsByClassName('game-square')
const header = document.getElementById('game-heading')
const resetBtn = document.getElementById('restart-button')
let player1 = 'X'
let player2 = '0'
let setCounter = 0
let currentPlayer = player1
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function (e) {
    e.target.innerHTML = currentPlayer
    e.target.disabled = true
    setIcon()
    if (setCounter == 9) {
      resetBtn.style.display = 'inline-block'
    }
  })
}
function setIcon() {
  setCounter++
  if (currentPlayer == player1) {
    currentPlayer = player2
    header.innerHTML = `Player 2's Turn`
  } else {
    currentPlayer = player1
    header.innerHTML = `Player 1's Turn`
  }
  checkWin()
}
function resetTable() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = ''
    squares[i].disabled = false
  }
  resetBtn.style.display = 'none'
  header.innerHTML = "Players 1's Turn"
  currentPlayer = player1
}
resetBtn.addEventListener('click', function () {
  resetTable()
})
function checkWin() {
  let boxes = []
  for (let i = 0; i < squares.length; i++) {
    if (
      (squares[0].innerHTML == 'X' && squares[1].innerHTML) == 'X' &&
      squares[2].innerHTML == 'X'
    ) {
      header.innerHTML = 'Player 1 Won'
      resetBtn.style.display = 'inline-block'
    } else if (
      squares[0].innerHTML == '0' &&
      squares[1].innerHTML == '0' &&
      squares[2].innerHTML == '0'
    ) {
      header.innerHTML = 'Player 2 Won'
      resetBtn.style.display = 'inline-block'
    } else if (
      squares[3].innerHTML == 'X' &&
      squares[4].innerHTML == 'X' &&
      squares[5].innerHTML == 'X'
    ) {
      header.innerHTML = 'Player 1 Won'
      resetBtn.style.display = 'inline-block'
    } else if (
      squares[6].innerHTML == 'X' &&
      squares[7].innerHTML == 'X' &&
      squares[8].innerHTML == 'X'
    ) {
      header.innerHTML = 'Player 1 Won'
      resetBtn.style.display = 'inline-block'
    } else if (
      squares[0].innerHTML == 'X' &&
      squares[3].innerHTML == 'X' &&
      squares[6].innerHTML == 'X'
    ) {
      header.innerHTML = 'Player 1 Won'
      resetBtn.style.display = 'inline-block'
    } else if (
      squares[1].innerHTML == 'X' &&
      squares[4].innerHTML == 'X' &&
      squares[7].innerHTML == 'X'
    ) {
      header.innerHTML = 'Player 1 Won'
      resetBtn.style.display = 'inline-block'
    } else if (
      squares[2].innerHTML == 'X' &&
      squares[5].innerHTML == 'X' &&
      squares[8].innerHTML == 'X'
    ) {
      header.innerHTML = 'Player 1 Won'
      resetBtn.style.display = 'inline-block'
    } else if (
      squares[0].innerHTML == 'X' &&
      squares[4].innerHTML == 'X' &&
      squares[8].innerHTML == 'X'
    ) {
      header.innerHTML = 'Player 1 Won'
      resetBtn.style.display = 'inline-block'
    } else if (
      squares[2].innerHTML == 'X' &&
      squares[4].innerHTML == 'X' &&
      squares[6].innerHTML == 'X'
    ) {
      header.innerHTML = 'Player 1 Won'
      resetBtn.style.display = 'inline-block'
    } else if (
      squares[3].innerHTML == '0' &&
      squares[4].innerHTML == '0' &&
      squares[5].innerHTML == '0'
    ) {
      header.innerHTML = 'Player 2 Won'
      resetBtn.style.display = 'inline-block'
    } else if (
      squares[6].innerHTML == '0' &&
      squares[7].innerHTML == '0' &&
      squares[8].innerHTML == '0'
    ) {
      header.innerHTML = 'Player 2 Won'
      resetBtn.style.display = 'inline-block'
    } else if (
      squares[0].innerHTML == '0' &&
      squares[3].innerHTML == '0' &&
      squares[6].innerHTML == '0'
    ) {
      header.innerHTML = 'Player 2 Won'
      resetBtn.style.display = 'inline-block'
    } else if (
      squares[1].innerHTML == '0' &&
      squares[4].innerHTML == '0' &&
      squares[7].innerHTML == '0'
    ) {
      header.innerHTML = 'Player 2 Won'
      resetBtn.style.display = 'inline-block'
    } else if (
      squares[2].innerHTML == '0' &&
      squares[5].innerHTML == '0' &&
      squares[8].innerHTML == '0'
    ) {
      header.innerHTML = 'Player 2 Won'
      resetBtn.style.display = 'inline-block'
    } else if (
      squares[0].innerHTML == '0' &&
      squares[4].innerHTML == '0' &&
      squares[8].innerHTML == '0'
    ) {
      header.innerHTML = 'Player 2 Won'
      resetBtn.style.display = 'inline-block'
    } else if (
      squares[2].innerHTML == '0' &&
      squares[4].innerHTML == '0' &&
      squares[6].innerHTML == '0'
    ) {
      header.innerHTML = 'Player 2 Won'
      resetBtn.style.display = 'inline-block'
    }
  }
}

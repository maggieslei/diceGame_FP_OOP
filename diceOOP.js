class DiceGame {
  constructor(rollBtnId, resultDisplayId) {
    this.rollBtn = document.getElementById(rollBtnId);
    this.resultDisplay = document.getElementById(resultDisplayId);

    this.rollBtn.addEventListener('click', this.rollDice);
  }

  getRandomRoll() {
    return Math.floor(Math.random() * 6) + 1;
  }

  checkWin(roll) {
    return roll === 6;
  }

  rollDice = () => {
    const roll = this.getRandomRoll();

    if (this.checkWin(roll)) {
      this.resultDisplay.innerText = `You rolled a ${roll}! You win!`;
    } else {
      this.resultDisplay.innerText = `You rolled a ${roll}! Try again!`;
    }
  };
}

new DiceGame('rollBtn', 'result');

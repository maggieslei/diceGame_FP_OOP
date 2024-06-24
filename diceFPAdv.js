const partial =
  (f, ...fixedArgs) =>
  (...args) =>
    f(...fixedArgs, ...args);

const compose = (...fns) =>
  fns.reduceRight(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );

// Dice Game Code:
const getRandomRollFP = () => Math.floor(Math.random() * 6) + 1;
const checkWinFP = (roll) => roll === 6;

const displayResultFP = (element, message) => {
  element.innerText = message;
};

const createMessage = (roll) => {
  return checkWinFP(roll)
    ? `You rolled a ${roll}. You Win!`
    : `You rolled a ${roll}. Try again!`;
};

const createDiceGameFP = (rollBtnId, resultDisplayId) => {
  const showResult = partial(
    displayResultFP,
    document.getElementById(resultDisplayId)
  );
  const playGame = compose(getRandomRollFP, createMessage, showResult);
  document.getElementById(rollBtnId)?.addEventListener('click', playGame);
};

createDiceGameFP('rollBtn', 'result');

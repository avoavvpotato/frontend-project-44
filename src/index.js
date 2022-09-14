/* eslint-disable no-eval */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';

export const hello = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  return {
    userName,
  };
};

const game = (func, expression) => {
  const hi = hello();
  console.log(expression);
  for (let i = 1; i <= 3; i += 1) {
    const games = func();
    if (games.userResult === games.result && i <= 2) {
      console.log('Correct!');
    } else if (games.userResult === games.result && i === 3) {
      console.log('Correct!');
      console.log(`Congratulations, ${hi.userName}!`);
    } else if (games.userResult !== games.result) {
      console.log(`'${games.userResult}' is wrong answer ;(. Correct answer was '${games.result}'.`);
      console.log(`Let's try again, ${hi.userName}!`);
      break;
    }
  }
};

export default game;

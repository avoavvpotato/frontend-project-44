/* eslint-disable import/prefer-default-export */
/* eslint-disable no-eval */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';

export const brainCalc = () => {
  const array = ['*', '-', '+'];
  const firstNumber = Math.floor(Math.random() * 101);
  const secondNumber = Math.floor(Math.random() * 101);
  const random = array[Math.floor(Math.random() * array.length)];
  const result = eval(`${firstNumber} ${random} ${secondNumber}`);
  console.log(`Question: ${firstNumber} ${random} ${secondNumber}`);
  let userResult = readlineSync.question('Your answer: ');
  userResult = eval(userResult);

  return {
    userResult,
    result,
  };
};

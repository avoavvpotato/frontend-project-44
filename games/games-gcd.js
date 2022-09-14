/* eslint-disable no-eval */
import readlineSync from 'readline-sync';

const devider = (num) => {
  const result = [];
  let i = 1;
  while (i <= num) {
    if (num % i === 0) {
      result.push(i);
    }
    i += 1;
  }
  return result;
};

const brainGcd = () => {
  const firstNumber = Math.floor(Math.random() * 101);
  const secondNumber = Math.floor(Math.random() * 101);
  const firstArray = devider(firstNumber);
  const secondArray = devider(secondNumber);
  const duplicate = [...new Set(firstArray)].filter((item) => secondArray.includes(item));
  const maxDevider = Math.max(...duplicate);
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  let userResult = readlineSync.question('Your answer: ');
  const result = maxDevider;
  userResult = eval(userResult);

  return {
    userResult,
    result,
  };
};

export default brainGcd;

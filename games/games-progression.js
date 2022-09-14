/* eslint-disable no-eval */
import readlineSync from 'readline-sync';

const progression = (value) => {
  const startValue = Math.floor(Math.random() * 101);
  let i = startValue;
  let counter = 1;
  const result = [];
  while (counter <= 10) {
    result.push(i);
    i += value;
    counter += 1;
  }
  return result;
};

const brainProgression = () => {
  const numberRandom = Math.floor(Math.random() * 11);
  const array = progression(numberRandom);
  const missinRandom = Math.floor(Math.random() * 1);
  console.log(`Question: ${array.slice(0, missinRandom).join(' ')} .. ${array.slice(missinRandom + 1).join(' ')}`);
  const userResult = readlineSync.question('Your answer: ');
  const result = String(array[missinRandom]);

  return {
    userResult,
    result,
  };
};

export default brainProgression;

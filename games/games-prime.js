import readlineSync from 'readline-sync';

const isPrime = (num) => {
  let i = 2;
  while (i < num) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

export default () => {
  const numberRandom = Math.floor((Math.random() * 101) + 1);
  console.log(`Question: ${numberRandom}`);
  const isPrim = isPrime(numberRandom) ? 'yes' : 'no';
  const userResult = readlineSync.question('Your answer: ');
  const result = isPrim;

  return {
    userResult,
    result,
  };
};

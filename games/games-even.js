import readlineSync from 'readline-sync';

const brainEven = () => {
  const numberRandom = Math.floor(Math.random() * 101);
  console.log(`Question: ${numberRandom}`);
  const iseven = numberRandom % 2 === 0 ? 'yes' : 'no';
  const userResult = readlineSync.question('Your answer: ');
  const result = iseven;

  return {
    userResult,
    result,
  };
};

export default brainEven;

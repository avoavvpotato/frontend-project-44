#!/usr/bin/env node
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const gameEven = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log('Question: 15');
    const numberOne = readlineSync.question('Your answer: ');
    if (numberOne === 'no') {
        console.log('Correct!');
        console.log('Question: 6');
        const numberSecond = readlineSync.question('Your answer: ');
        if (numberSecond === 'yes') {
            console.log('Correct!');
            console.log('Question: 7');
            const numberTherd = readlineSync.question('Your answer: ');
            if (numberTherd === 'no') {
                console.log('Correct!');
                console.log(`Congratulations, ${userName}`);
            } else {
                console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
            }
        } else {
            console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
        }
    } else {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    }
};
gameEven();
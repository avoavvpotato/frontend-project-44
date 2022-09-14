#!/usr/bin/env node
/* eslint-disable no-eval */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import game from '../src/index.js';
import brainPrime from '../games/games-prime.js';

const expression = 'Answer "yes" if given number is prime. Otherwise answer "no".';
game(brainPrime, expression);

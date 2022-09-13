#!/usr/bin/env node
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import game from '../src/index.js';
import brainGcd from '../games/games-gcd.js';

const expression = 'Find the greatest common divisor of given numbers.';
game(brainGcd, expression);

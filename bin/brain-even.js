#!/usr/bin/env node
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import game from '../src/index.js';
import brainEven from '../games/games-even.js';

const expression = 'Answer "yes" if the number is even, otherwise answer "no".';
game(brainEven, expression);

#!/usr/bin/env node
/* eslint-disable no-eval */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import game from '../src/index.js';
import { brainCalc } from '../games/games-calc.js';

const expression = 'What is the result of the expression?';
game(brainCalc, expression);

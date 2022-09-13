#!/usr/bin/env node
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import game from '../src/index.js';
import brainProgression from '../games/games-progression.js';

const expression = 'What number is missing in the progression?';
game(brainProgression, expression);

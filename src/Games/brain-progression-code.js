#!/usr/bin/env node
import { getRandomNum } from '../utils.js';
import run from '../index.js';

const description = 'What number is missing in the progression?';

const buildProgression = (length, start, step) => {
  const progression = [];
  for (let i = start; progression.length < length; i += step) {
    progression.push(i);
  }
  return progression;
};

const generateRound = () => {
  const length = getRandomNum(5, 10);
  const start = getRandomNum(1, 100);
  const step = getRandomNum(1, 10);
  const progression = buildProgression(length, start, step);
  const indexHiddenNumber = getRandomNum(0, length - 1);
  const correctAnswer = progression[indexHiddenNumber].toString();
  progression[indexHiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};

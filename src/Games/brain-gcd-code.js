#!/usr/bin/env node
import { getRandomNum } from '../utils.js';
import run from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const minRange = 0;
const maxRange = 100;

const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b));

const generateRound = () => {
  const num1 = getRandomNum(minRange, maxRange);
  const num2 = getRandomNum(minRange, maxRange);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2).toString();
  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};

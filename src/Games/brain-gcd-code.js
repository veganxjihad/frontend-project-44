#!/usr/bin/env node
import { getRandomNum } from '../utils.js';
import run from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b));

const generateRound = () => {
  const num1 = getRandomNum(0, 100);
  const num2 = getRandomNum(0, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = getGcd(num1, num2).toString();
  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};

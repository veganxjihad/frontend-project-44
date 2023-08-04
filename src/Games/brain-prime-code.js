#!/usr/bin/env node
import { getRandomNum } from '../utils.js';
import run from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minRange = 0;
const maxRange = 100;

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
    return false;
    }
  }
  return true;
};

const generateRound = () => {
  const num = getRandomNum(minRange, maxRange);
  const question = num.toString();
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};

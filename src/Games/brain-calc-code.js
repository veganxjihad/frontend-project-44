#!/usr/bin/env node
import { getRandomNum } from '../utils.js';
import run from '../index.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (x, y, operator) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`There is no such operator like '${operator}'!`);
  }
};

const generateRound = () => {
  const number1 = getRandomNum(0, 50);
  const number2 = getRandomNum(0, 50);
  const operator = operators[getRandomNum(0, 2)];
  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculate(number1, number2, operator).toString();
  return [question, correctAnswer];
};

export default () => {
  run(description, generateRound);
};

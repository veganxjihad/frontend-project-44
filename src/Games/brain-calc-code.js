#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetingUser from "../index.js";
const name = greetingUser();

console.log('What is the result of the expression?');

// Generate random number

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate random operator

function getRandomOperator() {
    const operators = ['+', '-' , '*'];
    const randomIndex = getRandomNum(0, operators.length - 1);
    return operators[randomIndex];
}

// Calculate Numbers

function calculateExpression(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        default:
            NaN
    }
}

// Start play calculator game

export default function playCalculatorGames(name) {
    const maxRound = 3;
    let currentRound = 0;

    while (currentRound < maxRound) {
        const num1 = getRandomNum(1, 10);
        const num2  = getRandomNum(1, 10);
        const operator = getRandomOperator();
        const expression = `${num1} ${operator} ${num2}`;
        const correctAnswer = calculateExpression(num1, operator, num2);

        console.log(`Question: ${expression}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (Number(userAnswer) === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
            console.log(`Let's try again, ${name}!`);
            return;
        }

        currentRound++;
    }

    console.log(`Congratulations, ${name}!`);  
}

playCalculatorGames(name);

#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetingUser from "../index.js";
const name = greetingUser();

console.log('Find the greatest common divisor of given numbers.');

// Generate GCD algorithm

function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b]
    }
    return a;
}

// Generate random number

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Ganerate game GCD logic

export default function playGcdGame(name) {
    const maxRound = 3;
    let correctAnswer = 0;
    let currentRound = 0;

    while (currentRound < maxRound) {
       const num1 = getRandomNum(1, 30);
       const num2 = getRandomNum(1, 30);
       
       console.log(`Question: ${num1} ${num2}`);
       const userAnswer = readlineSync.question('Your answer: ');

       const correctAnswer = gcd(num1, num2);
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

playGcdGame(name);


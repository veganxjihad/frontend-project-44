#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetingUser from "../index.js";
const name = greetingUser();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

// Generate random number

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Checking number is prime

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
        return true;   
    }

// Start game check prime numbers

export default function playGame(name) {
let correctAnswerCount = 0;
const maxRound = 3;

for (let round = 0; round < maxRound; round++) {
    const randomNum = getRandomNum(1, 10);
    const correctAnswer = isPrime(randomNum) ? 'yes' : 'no';

    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer.toLowerCase() === correctAnswer) {
        console.log('Correct!');
        correctAnswerCount++;
    } else {
        console.log(`'${userAnswer.toLowerCase()}' is wrong answer ;(. Correct answer was ${isPrime(randomNum) ? "'yes'" : "'no'"}`)
        console.log(`Let's try again, ${name}!`);
        break;
    }
    if(correctAnswerCount === 3) {
        console.log(`Congratulations, ${name}!`);
    }
}
}
playGame(name);
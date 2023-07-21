#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetingUser from "../index.js";
const name = greetingUser();

console.log('What number is missing in the progression?');

function generateProgression() {
    
// Generate progression length

const progressionLength = Math.floor(Math.random() * 6) + 5;

//Generate ramdom start and step of progression

const startNumber = Math.floor(Math.random() * 50) + 1;
const step = Math.floor(Math.random() * 10) + 1;

// Create an array

const progression = Array.from({length: progressionLength}, (_, i) => startNumber + i * step);

// Create random position

const hiddenIndex = Math.floor(Math.random() * progressionLength);
const hiddenNumber = progression[hiddenIndex];
progression[hiddenIndex] = '..';
const progressionStr = progression.join(' ');
return { progressionStr, hiddenNumber };
}

// Get Play Progression Game

export default function playPrograssionGame(name) {
    const numRounds = 3;

    for (let i = 0; i < numRounds; i++) {

        const { progressionStr, hiddenNumber } = generateProgression();
        console.log(`Question: ${progressionStr}`);
        const userAnswer = readlineSync.question(`Your answer: `);

        if (userAnswer === hiddenNumber.toString()) {
            console.log('Correct!');
        } else {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${hiddenNumber}`);
            console.log(`Let's try again1, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`)
}

playPrograssionGame(name);
import readlineSync from 'readline-sync';

// Generate random number

function generateRandomNum() {
  return Math.floor(Math.random() * 100) + 1; 
}

// Checking number is even

function isEvenNum(num) {
    return num % 2 === 0;
}

// Start game

export default function playGame() {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");

    let correctAnswerCount = 0;

    for(let i = 0; i < 3; i++){
        const randomNum = generateRandomNum();
        console.log(`Question: ${randomNum}`);

        const userAnswer = readlineSync.question('Your answer: ');
        const isUserAnswerCorrect = (isEvenNum(randomNum) && userAnswer.toLowerCase() === 'yes' || !isEvenNum(randomNum) && userAnswer.toLowerCase() === 'no');

        if(isUserAnswerCorrect){
            console.log('Correct!');
            correctAnswerCount++;
        } else {
            console.log(`'${userAnswer.toLowerCase()}' is wrong answer ;(. Correct answer was ${isEvenNum(randomNum) ? "'yes'" : "'no'"}\nLet's try again, ${name}!`);
            break;
        }
    }
    if(correctAnswerCount === 3){
        console.log(`Congratulations, ${name}!`);
    }
}

playGame();
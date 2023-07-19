import readlineSync from 'readline-sync';

// Function for greeting in the user

export default function greetingUser() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}
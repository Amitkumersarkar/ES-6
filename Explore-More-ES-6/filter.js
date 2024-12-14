// filter out some element on a condition and returns an array with the elements that full-fil the condition in js

const numbers = [2, 4, 6, 8, 10];

const players = [75, 65, 67, 75, 72, 78];
// const selected = players.filter(p => p > 65);

//here filter out odd number of players
const selected = players.filter(p => p % 2 === 1);
console.log(selected);

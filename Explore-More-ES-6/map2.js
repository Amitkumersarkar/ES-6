//Array map to do one line loop in js
const numbers = [2, 4, 6, 8, 10];
function doubleIt(num) {
    console.log('num is : ', num);
    return num * 2;
}
const result = numbers.map(doubleIt);
console.log(result);
// function declaration

function add(a, b) {
    return a + b;
}

// function expression
const add2 = function (a, b) {
    return a + b;
}

// arrow function
const add3 = (a, b) => a + b;
const sum = add(5, 90);
console.log(sum);

// arrow function 2

// const add4 = (a, b) => a + b;
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;
const result = add4(4, 5, 6, 7);
console.log(result);

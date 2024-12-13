function add(num1 = 11, num2 = 0) {
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}

// const sum = add(5, 10);
const sum = add(5);

// example of empty string
function fullName(first, last = '') {
    const full = first + ' ' + last;
    return full;
}

// example of empty array
function friends(numbs = []) {
    console.log(numbs);
};

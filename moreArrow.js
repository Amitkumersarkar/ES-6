const getAge = (person) => person.age;
const student = { name: 'Amit Sarkar', age: 24 };
const age = getAge(student);
console.log(age);

// second example of single parameter

const getThrid = numbers => numbers[2];
const third = getThrid([5, 5, 50, 22, 14]);
console.log(third);

// single parameter without bracket

const doubleIt = num => num * 2;

// example of no parameter function
const getPI = () => Math.PI;
console.log(getPI);

// example of large arrow function
/*if you want to get anything returned from this 
function . then you have to use to return keyword */
const doMath = (x, y, Z) => {
    const sum = x + y + Z;
    const multi = x * y * Z;
    const result = sum + multi;
    return result;
}
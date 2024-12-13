// declaring an object
const actor = {
    name: 'jack',
    age: 35,
    phone: '0155443644',
    money: 40000000000,
}
/* if right side is an object then left side of destructuring will be
object as well*/
// use property name as a variable that contains the property value
const { phone, age: boyos } = actor
console
console.log(boyos);

// array destructor

const numbers = [45, 99]
const [first, second] = numbers;
const [x, y] = [12, 66];
// advanced
function doubleThem(a, b) {
    return [a * 2, b * 2];
}
// destructure an array
const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo);
const watch = {
    name: 'watch',
    color: 'black',
    price: 12000,
    isSold: true
};
console.log(watch);
//give us all properties name
const keys = Object.keys(watch);
//give us all properties value
const values = Object.values(watch);
//give us all entries or pair
const pair = Object.entries(watch);
console.log(pair);

// array of array , two dimensional array

// [
//     ['name', 'watch'],
//     ['color', 'black'],
//     ['price', 12000],
//     ['isSold', true]
// ]

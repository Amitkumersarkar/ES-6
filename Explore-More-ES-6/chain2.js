// data access from array of objects

const products = {
    // how much product
    count: 10000,
    data: [{
        serialNumber: 1,
        productName: 'Laptop',
        brandName: 'MacMini Pro M4 Chip',
        price: 1500
    },
    {
        serialNumber: 2,
        productName: 'Laptop',
        brandName: 'MacBook Pro M3 Chip',
        price: 1200
    }

    ]
}

console.log(products.data[0].serialNumber);
console.log(products.data[0].productName);
console.log(products.data[0].brandName);
console.log(products.data[0].price);
// second products price
console.log(products.data[1].serialNumber);
console.log(products.data[1].productName);
console.log(products.data[1].brandName);
console.log(products.data[1].price);
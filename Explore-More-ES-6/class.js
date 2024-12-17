// the class has some properties,objects and method
class Product {
    // properties declaration

    country = 'Bangladesh';
    // declare an constructors
    constructor(name) {
        this.name = name;
    }
    // parameterized function/method
    speak(google) {
        console.log(`talking about ${google}`)
    }
}

// declaration an object and call the function

const item = new Product;
item.speak('Hello World');
console.log(item);
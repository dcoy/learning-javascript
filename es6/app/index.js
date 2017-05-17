import { fellowship, total } from './fellowship';
import { add, multiple } from './math';
import { Animal, Lion } from './classes';

let limit = 200;
console.log(limit);

function cheer() {
  console.log("yay! using traditional function declaration");
}

setTimeout(function() {
  console.log("yay! using an anonymous function expression")
}, 1000)

setTimeout(() => {
  console.log("yay! using an arrow function")
}, 2000);

let cheer2 = () => {
  console.log("yay! declaring the cheer2 variable with an anonymous (arrow) function")
}

cheer();
cheer2();

// Helper methods - map and filter
// Help function - Map
let values = [20, 30, 40];
let double = (n) => {
  // argument passed to map: callback
  return n * 2;
}

let doubled = values.map(double);

// Shortened version of `doubled`
let doubled2 = values.map((n) => {
  return n * 2;
});

// Even shorter version of `doubled`
let doubled3 = values.map((n) => n*2);

console.log(doubled); // Array [ 40, 60, 80 ];
console.log(doubled2); // Array [ 40, 60, 80 ];
console.log(doubled3); // Array [ 40, 60, 80 ];


// Helper method - Filter
let points = [7,16,21,4,3,99,25,26];
let highScores = points.filter((n) => {
  return n > 15;
});

// Shorter version of highScores
let highScores2 = points.filter((n) => n > 15);

console.log(highScores); // Array [ 16, 21, 99, 25, 26 ]
console.log(highScores2); // Array [ 16, 21, 99, 25, 26 ]


// ======================================
// == More built-in ES6 helper methods ==
// ======================================

// String Helper methods
let str = `O ${"hai".repeat(5)}`;
console.log(str); // O haihaihaihaihai

console.log("butterfly".startsWith("butter")); // true
console.log("butterfly".endsWith("fly")); // true
console.log("butterfly".includes("t")); // true 

// Checking Numbers

const addToCart = (item, number) => {
  return Number.isFinite(number);
}

const addToCart2 = (item, number) => {
  return Number.isSafeInteger(number);
}

console.log(addToCart('shirt', 5)); // True
console.log(addToCart('shirt', Infinity)); // False
console.log(addToCart2('shirt', Math.pow(2, 54))); // False

// Modules - using import(top of document)
// Displaying the variable from imported doc
console.log(fellowship, total);
console.log(`Using the 'add' function from math.js: ${add(5, 10)}`);
console.log(`Using the 'multiply' function from math.js: ${multiple(5, 10)}`);


// =======================================
// ========= Importing classes ===========
// =======================================

let king = new Animal("Mufasa", 4.5);
console.log(king);
king.hello();

let son = new Lion("Simba", 2, "Orange");
console.log(son);
son.hello();

// Static Methods in Classes

class Calculator {
  static multiply(a, b) {
    return a * b;
  }
  static add(a, b) {
    return a + b;
  }
}

let a = Calculator.multiply(5,7);
let b = Calculator.add(5, 7);
console.log(a, b);

// =======================================
// ============ Prototypes ===============
// =======================================

function Wizard(name, house, pet) {
  this.name = name;
  this.house = house;
  this.pet = pet;

  this.greet = () => `I'm ${this.name} from ${this.house}.`;
}

Wizard.prototype.pet_name;

Wizard.prototype.info = function() {
  return `I have a ${this.pet} named ${this.pet_name}.`;
};

let harry = new Wizard("Harry", "Gryffindor", "Owl");
harry.pet_name = "Hedwig";

console.log(harry);
console.log(harry.greet());
console.log(harry.info());

// =====================================
// ========== Data Structures ==========
// =====================================

// Sets

let c = new Set();
c.add(5);
c.add(42);
c.add("O hai");
c.add({x: 50, y: 200});
console.log(c);
console.log(c.size);
console.log(c.has(5)); // true
console.log(c.has(7)); // false
let numbers = [5,6,9,1,12,345,1,88,61,89,2];
let numSet = new Set(numbers);
console.log(numSet);

for (let element of numSet.values()) {
  console.log(element);
}

let chars = "asdfgasdfyhalniwgasnmlaisgas";
let chars_arr = chars.split("");
let chars_set = new Set(chars_arr);
console.log(chars_set);

// Maps
let d = new Map();
let key_1 = "string key";
let key_2 = { a: "key" };
let key_3 = function() {};

d.set(key_1, 'return value for a string key');
d.set(key_2, 'return value for an object key');
d.set(key_3, 'return value for a function key');
console.log(d);

let numArr = [[1, 'one'], [2, 'two'], [3, 'three']];
let valMap = new Map(numArr);
console.log(valMap);

// Iterate over a Map
for (let [key, value] of valMap.entries()) {
  console.log(`${key} points to ${value}`);
}

let string1 = 'asdlknaiosndglkawngtlkan';
let letters = new Map();

for (let i=0; i<string1.length; i++) {
  let letter = string1[i];
  if (!letters.has(letter)) { // Similar to letters.has(letter) == false
    letters.set(letter, 1);
  } else {
    letters.set(letter, letters.get(letter) + 1);
  }
}

console.log(letters);
// Map { a: 4, s: 2, d: 2, l: 3, k: 3, n: 4, i: 1, o: 1, g: 2, w: 1, t: 1 }

// ==============================
// ========== Closures ==========
// ==============================

let call = () => {
  let secret = 'ES6 is pretty cool.';
  let reveal = () => {
    console.log(secret);
  }
  return reveal;
}

let unveil = call();
unveil();

// Function Factories

const addSuffix = (x) => {
  const concat = (y) => {
    return y + x;
  }
  return concat;
}

let add_ness = addSuffix("ness");
console.log(add_ness);
let h = add_ness("happi");
console.log(h); // happiness

let add_ful = addSuffix("ful");
let f = add_ful("fruit");
console.log(f); // fruitful

// Very consise
const product = (x) => y => y * x

let multiply = product(5);
console.log(multiply(3)); // 15
let double2 = product(2);
console.log(double2(9)); // 18

// Private Methods
const budget = () => {
  let balance = 0;
  let changeBal = (val) => {
    return balance += val;
  }
  const deposit20 = () => changeBal(20);
  const withdraw20 = () => changeBal(-20);
  const check = () => balance;

  return {deposit20,withdraw20,check}
}

let wallet = budget();
console.log(wallet);
wallet.deposit20();
wallet.deposit20();
wallet.deposit20();
wallet.deposit20();
console.log(`Your balance is: $${wallet.check()}`);

// ================================
// ========== Generators ==========
// ================================

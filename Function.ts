// Void function -> no return everything
function sayHello() {
  console.log("Hello world");
}
sayHello(); // Hello world

// Return function
function resNumber(): number {
  return 1;
}

function resName(name: string): string {
  return `My name's ${name}`;
}

function plusNumbers(a: number, b: number): number {
  return a + b;
}

function defValue(fname: string, lname: string = "Empty"): string {
  return `My name's ${fname} ${lname}`;
}

function defAnyValue(fname: string = "None", age: any): string {
  return `My name's ${fname} and ${age} years old`;
}
console.log(resNumber()); // 1
console.log(resName("Yuna")); // My name's Yuna
console.log(plusNumbers(10, 20)); // 30
console.log(defValue("Stand")); // My name's Stand Empty
// console.log(defValue(123, 45)); // Parameters type error
console.log(defAnyValue("Stand", 12)); // My name's Stand and 12 years old

// Rest function
function sumNumber(a: number, b: number, ...rest: number[]): number {
  return a + b + rest.reduce((a, b) => a + b, 0);
}
console.log(sumNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55

// Named parameter
function add({ x, y }: { x: number; y: number }): number {
  return x + y;
}
console.log(add({ y: 5, x: 10 })); // 15

/*
    1. Any
    2. Built-in type
    3. User-defined type
*/

var myName: string = "Sonas";
console.log(myName);
console.log(typeof myName);

var money: number = 100;
console.log(money);
console.log(typeof money);

var isTrue: boolean;

var i;

console.log(null === undefined);
console.log(null == undefined);
console.log(null === null);

// Array
const myArray: number[] = [1, 2, 3, 4];
console.log(myArray);
const anyArray: any[] = [1, 3.14, true, "Hi"];
console.log(anyArray);
console.log(anyArray[2]); // [ 1, 3.14, true, 'Hi' ]
anyArray.pop(); // Delete last element
console.log(anyArray); // [ 1, 3.14, true ]
anyArray.push("Say hi");
console.log(anyArray); // [ 1, 3.14, true, 'Say hi' ]

// Tuple
const employee: [number, string] = [1, "Yuna"];
// const employee1: [number, string] = [1, "Yuna". true]; // <- this line is error
console.log(employee); // [ 1, 'Yuna' ]
console.log(employee[1]); // Yuna
const members: [number, string, boolean][] = [
  [1, "Yuna", false],
  [2, "Yeji", true],
];
console.log(members); // [ [ 1, 'Yuna', false ], [ 2, 'Yeji', true ] ]
members.push([3, "Ryujin", true]);
console.log(members); // [ [ 1, 'Yuna', false ], [ 2, 'Yeji', true ], [ 3, 'Ryujin', true ] ]

// enum
enum WorkStatus {
  Task = 1,
  Working,
  Done,
}

console.log(WorkStatus.Working); // 2

// Normal if else

if (true) {
  console.log(true); // true
}

if (1 < 2) {
  console.log("1 < 2"); // 1 < 2
} else if (2 < 0) {
  console.log("2 < 0");
}

// Ternary operator
let x: number = 10,
  y: number = 20;
x > y ? console.log("x > y") : console.log("x < y"); // x < y

// Switch case
let pickCase = 1;
switch (pickCase) {
  case 0:
    console.log("case 1");
    break;
  case 1:
    console.log("case 2"); // case 2
    break;
}

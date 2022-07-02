// Normal for
for (let i = 0; i < 5; i++) {
  console.log(`I: ${i}`);
  /* 
        I: 0
        I: 1
        I: 2
        I: 3
        I: 4
    */
}

// For of -> return value
let members = ["Yuna", "Yeji", "Ryujin", "Lia", "Chaeryeong"];
for (let item of members) {
  console.log(item);
  /*
        Yuna
        Yeji
        Ryujin
        Lia
        Chaeryeong
    */
}

// For in -> return index
for (let item in members) {
  console.log(item);
  /*
        0
        1
        2
        3
        4
      */
}

// Do while
do {
  // statement first
} while (true);

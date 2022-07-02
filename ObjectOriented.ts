class Person {
  name: string = "";
  lastname: string = "";
  age: number = 0;

  sayHello() {
    return `Hello! I'm ${this.name} and ${this.age} years old :D`;
  }
}

const user1:any = new Person()
user1.name = "Yumeko"
user1.lastname = "Jabami"
user1.age = 17
console.log(user1.sayHello());


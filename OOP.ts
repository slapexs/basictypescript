class Point {
  x: number = 0;
  y: number = 0;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const point = new Point(11, 22);
console.log(`X = ${point.x} , Y = ${point.y}`); // X = 11 , Y = 22
point.x = 10;
point.y = 20;
console.log(`X = ${point.x} , Y = ${point.y}`); // X = 10 , Y = 20

class defVal {
  a: number = 0;
  b: number = 12;
  constructor(a: number = 33, b: number = 44) {
    this.a = a;
    this.b = b;
  }
}
const defPoint = new defVal();
console.log(defPoint.a); // 33

// Getter , Setter
class SumPoint {
  _x: number = 0;
  get x(): number {
    return this._x + 10;
  }

  set x(value: number) {
    this._x = value;
  }
}
const p = new SumPoint();
console.log(p._x); // 0
console.log(p.x); // 10
console.log(p.x); // 20

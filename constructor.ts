/**
 *
 * CONSTRUCTOR
 * is use to create the argument that is to be initialize
 * by the instance of a class
 * the use '?' makes a variable in an interface or constructor args optional
 *
 * @class Pointer
 * @param {number} x
 * @param {number} y
 *
 */

class Pointer {
  x: number;
  y: number;
  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log("X: ", this.x + ", Y: " + this.y);
  }
}

let points = new Pointer();
points.draw();

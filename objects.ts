/**
 * OBJECT
 * is the instance of a class
 * CLASS
 * is the eblue print
 */
class Point {
  x: number;
  y: number;

  draw() {
    console.log("X: " + this.x + ", Y: " + this.y);
  }

  getDistance(another: Point) {
    // code here
  }
}

let point = new Point();
point.x = 1;
point.y = 2;
point.draw();

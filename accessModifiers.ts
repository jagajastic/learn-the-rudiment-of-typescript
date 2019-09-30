/**
 *ACCESS MODIFIERS
 *are use to protect the variable in a class;
 *public, private, protected
 *
 * @class Pointe
 */
class Pointe {
  private x: number;
  public y: number;
  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  protected draw() {
    console.log("X: ", this.x + ", Y: " + this.y);
  }
}

let pointer = new Pointer();
points.draw();

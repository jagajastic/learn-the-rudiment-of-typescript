/**
 *ACCESS MODIFIERS IN CONSTRUCTOR PARAMETER
 *are use to protect the variable in a class;
 *public, private, protected
 *
 * @class Pointe
 */
class Pointel {
  constructor(private x?: number, public y?: number) {}

  protected draw() {
    console.log("X: ", this.x + ", Y: " + this.y);
  }
}

let pointe = new Pointer();
points.draw();

/**
 * VARIABLE DECLARATIONS
 *
 * var makes variable globall
 *
 * let makes your variable scoped
 */

function doSomething() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log("Finally: " + i);
}

doSomething();

/**
 *
 * this error because i is scoped to the for loop
 */
function doSomething2() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  //   note the below ignore type error
  //@ts-ignore
  console.log("Finally: " + i);
}

doSomething2();

import { errorMessagge } from "./module";

function log(message) {
  console.log(message);
}

let message = "Hello world";

if (!message) {
  errorMessagge();
}
log(message);
//

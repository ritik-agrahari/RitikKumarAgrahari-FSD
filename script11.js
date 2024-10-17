// Importing named exports
import { add, subtract, PI } from "./script00.js";

import * as jadoo from "./script00.js";

// Importing default export
import multiply from "./script00.js";

export { add, subtract, PI, multiply };
console.log("Add: ", jadoo.add(5, 3));
console.log("Subtract: ", jadoo.subtract(5, 3));
console.log("PI: ", jadoo.PI);
console.log("Multiply: ", multiply(5, 3));
/**
 * @reference https://github.com/lodash/lodash/blob/master/.internal/freeGlobal.js
 */
/** Detect free variable `global` from Node.js. */
const freeGlobal =
  typeof global === "object" &&
  global !== null &&
  global.Object === Object &&
  global;

export default freeGlobal;

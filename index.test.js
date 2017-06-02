var stringifyObject = require('./index.js');

var object = {
  a: "one",
  b: [
    {
      c: "Cool cool",
      d: "Also Cool",
      e: {
        yes: "uh huh",
        yeah: "cool"
      }
    },
    "Veep",
    2,
    143,
    "Another"
  ],
  g: {
    h: "high",
    i: "icicle",
    j: "Jeckyll"
  }
}

console.log(stringifyObject(object))

# stringify-object-lite
An extremely light-weight function to recursively stringify objects without adding slashes and other types of url-encoding. Clocks in at only 628 bytes minified with no dependencies.

## Installation

```shell
npm install --save stringify-object-lite;
or
yarn add stringify-object-lite
```

## Usage

###### For ES6 and up
```javascript
import stringifyObjectLite from 'stringify-object-lite';
```

###### For ES5
```javascript
var stringifyObjectLite = require("stringify-object-lite");
```

To stringify the following object:

```javascript
var obj = {
  a: "A string",
  b: "Another string",
  c: ["an", "array", "of", "strings", "and", 1, "int"],
  nested: {
    a1: "nested",
    b2: "object of strings",
    c3: {
      andA: "deeply",
      nested: "object"
    }
  }
}
```

Simply pass your object to the provided function:

```javascript
stringifyObjectLite(obj)
```

It will output the following as a single-line string (I've beautified this example for better legibility):

```
{
    a: "A string",
    b: "Another string",
    c: ["an", "array", "of", "strings", "and", "1", "int"],
    nested: {
        a1: "nested",
        b2: "object of strings",
        c3: {
            andA: "deeply",
            nested: "object",
        },
    },
}
```

var string = "";
var start = "{";
var end = "}";

function stringifyObject(object){
  Object.keys(object).forEach(function(key){
    recursivelyBuildObject(object, key);
  })
  //console.log(start + string + end);
  return start + string + end;
}

function recursivelyBuildObject(obj, k){
  if(typeof obj[k] !== "object"){
    string += k + ": \"" + obj[k] + "\", ";
  }else{
    if(Array.isArray(obj[k])){
      string += k + ": " + '["' + obj[k].join('\",\"') +'"], ';
    }else{
      string += k + ": " + start;
      Object.keys(obj[k]).forEach(function(subKey){
        recursivelyBuildObject(obj[k], subKey);
      })
      string += end + ",";
    }
  }
}

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

console.log(stringifyObject(obj))

module.exports = {
  stringifyObjectLite: stringifyObject
}

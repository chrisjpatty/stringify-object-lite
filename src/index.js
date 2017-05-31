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

module.exports = stringifyObject;

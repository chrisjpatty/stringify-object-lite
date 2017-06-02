var string = "";
var start = "{";
var end = "}";

function stringifyObject(object){
  string = "";
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
      string += k + ": " + '[';
        obj[k].forEach((arrItem, i)=>{
          if(typeof arrItem === 'object'){
            string += '{';
            Object.keys(arrItem).forEach(function(arrObj){
              recursivelyBuildObject(arrItem, arrObj);
            })
            string += '}' + (obj[k].length === i + 1 ? '' : ',');
          }
          else{
            string += '"' + arrItem + (obj[k].length === i + 1 ? '"' : '",')
          }
        })
        string += '], ';
    }else{
      string += k + ": " + start;
      Object.keys(obj[k]).forEach(function(subKey){
        recursivelyBuildObject(obj[k], subKey);
      })
      string += end;
    }
  }
}

module.exports = stringifyObject;

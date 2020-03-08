// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var invalidObjArr = ['function', 'undefined', 'symbol'];
  var result = '';

  if (invalidObjArr.includes(typeof obj) || obj === null) {
    return 'null';
  }

  if (typeof obj === 'string') {
    return `"${obj}"`;
  }

  if (typeof obj === 'number') {
    if (isNaN(obj)) {
      result += 'null';
    } else {
      result += obj;
    }
  }

  if (typeof obj === 'boolean') {
    result += obj;
  }

  if (Array.isArray(obj)) {
    var arr = [];
    obj.forEach((x) => arr.push(stringifyJSON(x)));
    return result += '[' + arr.join(',') + ']';
  }

  if (typeof obj === 'object') {
    for (key in obj){
      if (!invalidObjArr.includes(typeof obj[key])) {
        result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
        if (key === Object.keys(obj).pop()) {
          break;
        }
        result += ',';
      }
    }
    if (result[result.length - 1] === ',') {
      result = result.slice(0, -1);
    }
    return '{' + result + '}';
  }
  return result;
};

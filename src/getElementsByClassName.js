// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {

  var nodes = [];

  const checker = function (x) {
    if (x.classList && x.classList.contains(className)) {
      nodes.push(x);
    }
    if (x.hasChildNodes()) {
      x.childNodes.forEach(checker);
    }
  };
  checker(document.body);

  return nodes;
};

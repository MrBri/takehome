
function binaryMulti3 (array) {
  var newArray = [];
  array.forEach(function(num) {
    newArray.push(num, num + 1);
  });
  return newArray;
}

var a = [0, 3, 7];
var b = [1, 5, 8];
var c = [3, 0, 5];

console.log(binaryMulti3(a));
console.log(binaryMulti3(b));
console.log(binaryMulti3(c));
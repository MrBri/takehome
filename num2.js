
// Just run in node. "node num2.js"

var _ = require('underscore');

var ted = {name: 'ted', friends: []};
var bill = {name: 'bill', friends: []};
var jorge = {name: 'jorge', friends: []};
var george = {name: 'george', friends: []};
var maggie = {name: 'maggie', friends: []};
var alica = {name: 'alica', friends: []};
var fred = {name: 'fred', friends: []};
var jack = {name: 'fred', friends: []};
ted.friends.push(bill, george, jorge);
bill.friends.push(ted);
jorge.friends.push(ted);
george.friends.push(maggie, ted);
maggie.friends.push(george, alica);
alica.friends.push(maggie);
fred.friends.push(jack);
jack.friends.push(fred);

// Breadth First Search
// The worst case for time complexity is when every person and friend is searched.
// Space complexity is proportional to the number of people at the deepest level.
function connected(node, target) {
  var queue = [];
  if (_(node.friends).contains(target)) {return true;}
  node.visited = true;
  queue.push(node);

  while (queue.length > 0) {
    var newNode = queue.shift();
    var friends = newNode.friends;
    for (var i = 0; i < friends.length; i++) {
      if (!friends[i].visited) {
        if (_(friends[i].friends).contains(target)) {return true;}
        friends[i].visited = true;
        queue.push(friends[i]);
      }
    }
  }
  return false;
}

console.log(connected(ted, bill));
console.log(connected(ted, maggie));
console.log(connected(ted, alica));
console.log(connected(ted, jack));

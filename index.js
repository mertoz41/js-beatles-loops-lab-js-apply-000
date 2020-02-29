// add solution here
function theBeatlesPlay(musicians,instruments) {
  var emptyArray = [];
  for ( var i = 0; i < musicians.length; i++) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
  } 
  return emptyArray;
}
function johnLennonFacts(facts) {
  var array = [];
  var i = 0;
  while(facts.length > i) {
    array.push(`${facts}!!!`);
    i++;
  }
  return array;
}
function iLoveTheBeatles(number) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!")
    number++;
  } 
  while (number < 15);
  return newArray;
  }
 

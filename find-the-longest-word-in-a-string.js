function findLongestWordLength(str) {
var strArray=str.split(" ");
var lengthArray=strArray.map(function(current){
  return current.length;
})
  lengthArray.sort(function(a, b){return a-b});
  return lengthArray[lengthArray.length-1]
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

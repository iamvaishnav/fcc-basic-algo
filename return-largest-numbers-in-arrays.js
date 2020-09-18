function largestOfFour(arr) {
  var largestArray=[];
  var i,j,largest;
  for(i=0;i<arr.length;i++){
    largest=Math.max(...arr[i]);
    largestArray.push(largest);
   
  }
  return largestArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

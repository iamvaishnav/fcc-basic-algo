function frankenSplice(arr1, arr2, n) {
  
  var arr2DP=[];
  arr2.forEach(function(current){
    arr2DP.push(current)
  })
  arr2DP.splice(n,0,...arr1)
  console.log(arr2DP)
  return arr2DP;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

function getIndexToIns(arr, num) {
  var pos;
  arr.sort(function(a, b){return a-b});
  for(var i=0;i<arr.length;i++){
    if(arr[i]>=num){
      pos=i;
      break;
    }
  }
  if(arr.length===0){
    pos=0;
  }
  if(arr[arr.length-1]<num){
    pos=arr.length;
  }
 return pos;
}

getIndexToIns([40, 60], 50);

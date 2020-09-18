function chunkArrayInGroups(arr, size) {
  var blankArray=[];
for(var i=0;i<arr.length;i+=size){
 blankArray.push(arr.slice(i,i+size))
}
  return blankArray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);

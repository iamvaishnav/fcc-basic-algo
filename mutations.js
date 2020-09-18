function mutation(arr) {
  var i,j,count=0;
arr.forEach(function(current,index,arr){
  arr[index]=current.toLowerCase();
});
var str1=arr[0];
var str2=arr[1];
var arr1=str1.split("");
var arr2=str2.split("");
for(i=0;i<arr2.length;i++){
  for(j=0;j<arr1.length;j++){
    if(arr2[i]===arr1[j]){
      count++;
      break;
    }
}
}
if(count>=arr2.length){
  return true;
}else return false;

}

mutation(["hello", "hey"]);

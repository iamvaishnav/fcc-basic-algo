function titleCase(str) {
  var strArray=str.split(" ");
strArray.forEach(function(current,index,arr){
 arr[index]=current.toLowerCase();
})
strArray.forEach(function(current,index,arr){
 var str1,str2,newString;
 str1=current.substr(0,1);
 str2=current.substr(1,current.length-1)
var str3=str1.toUpperCase()
  newString=str3+str2;
  arr[index]=newString
   console.log(newString);
})
return strArray.join(" ")


 
}

titleCase("I'm a little tea pot");

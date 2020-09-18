function reverseString(str) {
  var strArray=Array.from(str);
  
  strArray.reverse();
 str=strArray.join("")
  return str;
}

reverseString("hello");

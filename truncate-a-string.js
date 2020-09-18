function truncateString(str, num) {
   var strLength=str.length;
  var trun='...',newStr;
 if(strLength>num){
newStr=str.slice(0,num)+trun;
console.log(newStr)
return newStr;
 }else return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

function repeatStringNumTimes(str, num) {
  var newStr="";
  if (num>0){
    for(var i=1;i<=num;i++){
      newStr +=str;
    }
    return newStr;
  }else return newStr;

}

repeatStringNumTimes("abc", 3);

function confirmEnding(str, target) {
 var targetLength=target.length;
 var sub=str.slice((str.length)-targetLength)
 console.log(sub)
 if (sub===target){
   return true;
 }else return false;
}

confirmEnding("Bastian", "n");

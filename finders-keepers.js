function findElement(arr, func) {
 var x=arr.find(func);
 console.log(x)
 return x;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

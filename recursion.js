// Recursive Sigma
// Write a recursive function that given a number returns the sum of integers from 1 to that number.
// Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.
function rSigma(num){
    if(num > 0 ){
        return rSigma(num -1) + num;
    }
    return 0;
}
console.log(rSigma(5), 'sigma recursion');

// Recursive Factorial
// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).
function rFact(num){
    if(num > 1){
        return rFact(num-1)*num;
    }
    return 1
}
console.log(rFact(6), 'factorial');

//Write rFib(num). Recursively compute and return numth Fibonacci value. 
//As earlier, treat first two (num = 0, num = 1) Fibonacci vals as 0 and 1. Examples: 
function rFib(num) {
    if (num === 0) {
      return 0;
    } else if (num === 1) {
      return 1;
    } else {
      return rFib(num-1) + rFib(num-2);
    }
  }
console.log(rFib(4)); 

//Recursive Binary Search
//Given a sorted array and a value, recursively determine whether value is found within array.
function rBinarySearch(arr, num){
  let mid = Math.floor(arr.length/2);
  if(arr[mid] == num){
    return true
  }else if(num < arr[mid] && arr.length > 1){
    return rBinarySearch(arr.slice(0, mid), num);
  }else if(num > arr[mid] && arr.length > 1){
    return rBinarySearch(arr.slice(mid, arr.length), num)
  }else{
    return false
  }
}

console.log(rBinarySearch([1,2,3,5,6], 4), 'binary recursion'); //false
console.log(rBinarySearch([1,2,3,5,6], 5), 'binary recursion'); //true
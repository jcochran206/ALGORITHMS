function pushFront(arr, val) {
    for(let i = arr.length; i >= 0; i--){
        arr[i] = arr[i -1]
    }
    arr[0] = val

    return arr
    
}
// console.log('push front',pushFront([1,2,4], 5));

// Given an array, remove and return the value at the beginning of the array. 
//Prove the value is removed from the array by printing it. 
//You may use .pop(), you are able do this without it though!
// Examples:
// popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
// popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function
function popFront(arr){
   //save the first array
   let temp = arr[0];
   //loop 
   for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i + 1]
   }
   //decrease length
   arr.length--
   //return 
   console.log(arr)
   return temp
}
// console.log('pop front',popFront([0,5,10,15]))

// Given an array, index, and additional value, 
// insert the value into array at given index. You can think of pushFront(arr,val) 
// as equivalent to insertAt(arr,0,val). You may use .push(), 
// you are able do this without it though!
// Examples:
// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]

function insertAt(arr,idx,val){
    //loop to shift right
    for(let i = arr.length; i >= idx; i--){
        arr[i] = arr[i -1]
    }
    //set array 
    arr[idx] = val
    //return array
    return arr
}
console.log('insert at',insertAt([9,33,7], 1, 42));
// Given an array and an index into array, 
//remove and return the array value at that index. 
//Prove the value is removed from the array by printing it. 
//Think of popFront(arr) as equivalent to removeAt(arr,0).
// Examples:
// removeAt([1000,3,204,77], 1) => 3 returned, with [1000,204,77] printed in the function
// removeAt([8,20,55,44,98], 3) => 44 returned, with [8,20,55,98] printed in the function
function removeAt(arr, idx){
    let temp = arr[idx];
    
    arr[idx] = arr.pop()
    
    //return 
    console.log(arr)
    return temp
}
console.log('removeAt',removeAt([8,20,55,44,98], 3))
//Implement a function findSecondMaximum(arr), 
//which returns the second largest element in the array.
function findSecondMaximum(arr) {
    var max = Number.NEGATIVE_INFINITY;
    var secondmax = Number.NEGATIVE_INFINITY;
    for (var val of arr) {
        if (val > max) {
            secondmax = max
            max = val
        } else if (val > secondmax && val!=max)
            secondmax = val
    }
    return secondmax
}
console.log(findSecondMaximum([8,20,55,44,98], 'second max'))// 55

//Given two arrays that are sorted. Can you merge the arrays into one single array
function mergeArr(array1, array2){
    const mergedArr = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j= 1;
    //checks
    if(array1.length === 0){
        return array2
    }
    if(array2.length === 0){
        return array1
    }
    while(array1Item || array2Item){
        console.log(array1,array2);
        if(!array2Item || array1Item < array2Item){
            mergedArr.push(array1Item)
            array1Item = array1[i]
            i++
        }else{
            mergedArr.push(array2Item)
            array2Item = array2[j];
            j++;
        }
    }

    return mergedArr
}
console.log('merged', mergeArr([0,2,4,6],[1,3,5,7,9]))

//given an array find the first pair of duplicates
//array = [2,1,1,2,5,6,] returns 2
function findDuplicates(arr){
    //check basecase 
    if(arr === 0){
        return 'not array';
    }
   for(let i = 0; i < arr.length; i++){
    for(let j = i +1; j < arr.length; j++){
        if(arr[i] === arr[j]){
            return arr[i]
        }
    }
   }
   return 'no duplicates'
}
console.log(findDuplicates([0,2,2,1,3,5]));

function findDuplicatesMap(arr){
    let map = {};
    for(let i=0; i<arr.length; i++){
        if(map[arr[i]] !== undefined){
            return arr[i]
        }else{
            map[arr[i]] = i
        }
        console.log(map)
    }
}
console.log(findDuplicatesMap([1,3,3,4,5,6]), ':dups with maps')

function reverseArr(arr){
    for (var i = 0; i < arr.length / 2; i++) {
        // Swap values
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr
}
console.log(reverseArr([1,3,3,4,5,6]), ":reverse array")
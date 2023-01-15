// Create a function that, given a string, 
//returns all of that string’s contents, but without blanks. 
// Examples:
// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"
function removeBlanks(str){
    let arr = str.split(" ").join("");
    return arr
}
console.log('remove blanks', removeBlanks("I can not BELIEVE it's not BUTTER"));
//traditional way to remove blanks 
function removeBlanks2(str){
    //edge cases 
    if(str == ""){
        return 'no string';
    }
    //build new string due to immutable 
    let newStr = '';
    //loop thru given string
    for(let i = 0; i < str.length; i++){
    //remove if character is not a spaces from string
         if(str[i] != " "){
            //concat
            newStr += str[i]
         }
    }
    return newStr;
    //return strring

}
console.log(removeBlanks2(""), ': newstring Funk')

// Get Digits
// Create a JavaScript function that given a string, 
//returns the integer made from the string’s digits. 
//You are allowed to use isNaN() and Number().
// Examples:
// getDigits("abc8c0d1ngd0j0!8") => 801008
// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680
function getDigits(str){
    let arr = str.split(" ")
    for(let i = 0; i >= arr.length; i++){
        if(isNaN(arr[i])){
            console.log('not a number')
        }else{
            console.log(str)
        }
    }
}
console.log(getDigits('get digits',"abc8c0d1ngd0j0!8"))

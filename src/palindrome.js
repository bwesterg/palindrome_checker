//self explanitory palindrome checker

function palindromeChecker(str){
    let cleaned = str.replace(/\W/g, '').toLowerCase();
    //takes original string and removes non-alphanumeric noise,
    //then converts all characters to lowercase.
    let reversed = cleaned.split('').reverse().join('');
    //sends each character to an array, reverses the array
    //order,and rejoins characters to a new string.
    console.log(cleaned, reversed);

    if (reversed === cleaned) {
        console.log("IS a palindrome");
    } else {
        console.log("NOT a palindrome")
    };
    //return reversed === cleaned;
};

palindromeChecker("taco cat")
//
//
// Check if a string (first argument, str) 
// ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, 
// which was introduced in ES2015. But for the purpose of 
// this challenge, we would like you to use one of 
// the JavaScript substring methods instead.

function confirmEnding(str, target) {
    let myTarget = target.split('').length;
    let myArray = str.split('');
    let strEnd = myArray.splice(-myTarget).join('');
    //console.log(str.length - target.length);
    //console.log(str.slice(str.length - target.length));
    console.log(str.slice(2))
    // if (strEnd === target) {
    //   return true;
    // } else
    // return false
    return strEnd === target;
};

confirmEnding("Bastian", "n");
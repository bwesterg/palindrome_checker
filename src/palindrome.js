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

//Repeat a given string str (first argument) for num times 
//(second argument). Return an empty string if num is 
//not a positive number. For the purpose of this challenge, 
//do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {

    let arr = []
    console.log(str.split('').join(''));

    for(let i = 0; i <= num-1; i++){
        arr.push(str);
    }
    return arr.join('');
}

repeatStringNumTimes("abc", 3);
//returns abcabcabc

//Truncate a string (first argument) if it is longer 
//than the given maximum string length (second argument). 
//Return the truncated string with a ... ending.

function truncateString(str, num) {
    if (num < str.length) {
        let elypsis = str.split('').splice(num).join('');
        //console.log(str.replace(elypsis, '...'))
        let newStr = str.replace(elypsis, '...');
        return newStr;
    } else if (num >= str.length) {
        return str;
    }
};

//Return the provided string with the first letter of each word 
//apitalized. Make sure the rest of the word is in lower case.
//For the purpose of this exercise, you should also capitalize 
//connecting words like the and of.
function titleCase(str) {
    const regex = / /g;
    let modString = str.toLowerCase().split(regex);
    let array = [];
    //console.log(modString);
    for (let word in modString){
        array[word] = modString[word][0].toUpperCase() + modString[word].slice(1);
    }
    //console.log(array); 
    let newString = array.join().replace(/,/g, ' ');
    console.log(newString);
    return newString;
}

titleCase("I'm a little tea pot");

//Copy each element of the first array into the second 
//array, in order.

//Begin inserting elements at index n of the second array.

//Return the resulting array. The input arrays should 
//remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
    let arr2copy = arr2.slice();
    //console.log(arr2copy);
    for (let i=0;i<arr1.length;i++){
        arr2copy.splice(n,0,arr1[i]);
        n++;
    }
    console.log(arr2copy)
    return arr2copy; 
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
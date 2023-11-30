// console.log('hello');

//function to test if a string is a palindrome

function palindromeChecker(str) {
    //remove non-alphanumeric characters
    // clean = str.replace(/[^a-zA-Z0-9]/g, "");
    // lowered = clean.toLowerCase();
    // reversed = lowered.split('').reverse().join('');
    // console.log(lowered, reversed);

    let cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let reversed = cleaned.split('').reverse().join('');
    console.log(cleaned, reversed);

        if (reversed === cleaned){
            console.log(str + " is a palindrome, after removing non-alphanumeric characters and making all letters lowercase.");
        } else {
            console.log(str + " is NOT a palindrome");
        }

    // if (lowered === reversed){
    //     console.log("it is a palindrome");
    // } else {
    //     console.log("NOT a palindrome");
    // }
};

palindromeChecker("Ra%cecar");
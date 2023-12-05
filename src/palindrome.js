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
};

palindromeChecker("taco cat")
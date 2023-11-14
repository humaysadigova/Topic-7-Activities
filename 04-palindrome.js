function isPalindrome(str) {
    let newStr = str.replace(/\s/g, '').toLowerCase();
    let reverseString = [];
    for (let i = newStr.length-1; i>=0; i--){
        reverseString.push(newStr[i])

    }
    return reverseString.join('') === newStr ? true : false;
}

console.log(isPalindrome('A n a'));
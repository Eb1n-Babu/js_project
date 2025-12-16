function palindrome(str){
    const x = str.split("").reverse().join("")
    return str.toUpperCase() === (x.toUpperCase());
}
console.log(palindrome("malayalam"))
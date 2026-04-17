function palindrome(x){
    const  y = x.split("").reverse().join("");
    if ((y.length === x.length) && (x === y)){
        console.log("Palindrome");
    }else
    {console.log("N ot Palindrome");}
}
palindrome("hello")
palindrome("malayalam")
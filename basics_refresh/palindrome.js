const palindrome =(a)=>{
    if ( typeof a == "string" ){
        x = a.split("").reverse().join("");
        if ( x === a){
            console.log("palindrome");
        }
        else {
            console.log("not palindrome");
        }
    }
    else {
        console.log("not palindrome");
    }
}

palindrome(1,2,3);

const isPalindrome = ()=>{
    x = document.getElementById("root").value;
    let reverse_x = x.split("").reverse().join("");
    if ( x === reverse_x){
        document.getElementById("results").innerHTML = "palindrome";
    }
    else {
        document.getElementById("results").innerHTML= "not palindrome";
    }
}
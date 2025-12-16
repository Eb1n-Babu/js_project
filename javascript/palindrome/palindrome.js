function palindrome() {
    const  x = document.getElementById("palindrome").value.toUpperCase();
    console.log(x)
    const  y = x.split("").reverse().join("").toUpperCase();
    console.log(y)
    if (x === y) {
        document.getElementById("result").innerHTML = "palindrome";
    }
    else {
        document.getElementById("result").innerHTML = " not Palindrome";
    }

}
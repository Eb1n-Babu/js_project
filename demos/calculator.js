const calculate = () =>{
    const x = document.getElementById("input").value;
    if (x.toUpperCase() === x.toUpperCase().split("").reverse().join("")) {
        document.getElementById("result").innerHTML = "palindrome";
    }else {
        document.getElementById("result").innerHTML = "not palindrome";
    }
}
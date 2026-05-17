function  prime_check(x){
    if (x < 2){
        return false;
    }
    else if (x === 2){
        return true;
    }
    else if (x % 2 === 0){
        return false;
    }
    else {
        if (x > 2){
            for (let i = 3; i <= Number(Math.sqrt(x))+1; i+=2){
                if (x % i === 0){
                    return false;
                }
            }
            return true;
        }
    }
}
console.log(prime_check(2));
console.log(prime_check(3));
console.log(prime_check(7));
console.log(prime_check(4));
console.log(prime_check(5));

function  prime_check2() {
    a = document.getElementById("input").value;
    x = Number(a)
    if ( x < 2){
        return document.getElementById("result").innerHTML = "not prime";
    }
    else if (x === 2){
        return document.getElementById("result").innerHTML = "prime";
    }
    else if (x % 2 === 0){
        return document.getElementById("result").innerHTML = "not prime";
    }
    else {
        if (x > 2){
            for (let i = 3; i <= Number(Math.sqrt(x))+1; i+=2){
                if (x % i === 0){
                    return document.getElementById("result").innerHTML = "not prime";
                }
            }
            return document.getElementById("result").innerHTML = "prime";
        }
    }
}

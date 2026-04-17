function primeCheck(x){
    if (x > 2){
        for (let i = 2; i <= Math.sqrt(x)+1; i++){
            if (x % i === 0){
                return false;
            }
        }
        return true;
    }
    else return x === 2;
}

console.log(primeCheck(2));
console.log(primeCheck(3));
console.log(primeCheck(4));
console.log(primeCheck(5));
console.log(primeCheck(-6));
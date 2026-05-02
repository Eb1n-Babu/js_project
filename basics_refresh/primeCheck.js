function primeCheck(x){
    console.log(x);
    if (x < 2){
        console.log("false");
        return false;
    }
    else if (x > 2){
        for (let i = 2; i <= Number(Math.sqrt(x))+1; i++){
            if (x % i === 0){
                console.log("false");
                return false;
            }
        }
        console.log("true");
        return true;
    }
    else return (x === 2)
}

primeCheck(11)
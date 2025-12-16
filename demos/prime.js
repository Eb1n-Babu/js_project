function  prime(x){
    if (typeof(x) == "number"){
        if (x >= 2){
            for (let i = 2; i <= Math.sqrt(x); i++){
                if (x % i === 0){
                    return false;
                }
            }
            return true;
        }
    }
}

for (let i = 1; i <= 10; i++){
    console.log(prime(i),i);
}
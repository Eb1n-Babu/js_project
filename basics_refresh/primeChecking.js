function  primeCheck() {
   const x = Number(document.getElementById("root").value);

   if (x === 2){
      console.log("true");
      return true;
   }
   else if (x > 2){
      for (let i = 2; i <= Number(Math.sqrt(x)+1); i++) {
         if (x % i === 0){
            console.log("false");
            return false;
         }
      }
      console.log("true");
      return true;
   }
   else {
      console.log("false");
      return false;
   }
}

primeCheck(5);

const onClick = () =>{
    if (primeCheck()){
        document.getElementById("result").innerHTML = "prime";
    }else {
        document.getElementById("result").innerHTML = "not prime";
    }
}
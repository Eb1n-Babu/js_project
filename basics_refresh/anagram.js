const anagram = (x) =>{
    if (typeof x == "string"){
        const y = x.split("").reverse().join("");
        return x === y;
    }

}
console.log(anagram("malaygalam"));
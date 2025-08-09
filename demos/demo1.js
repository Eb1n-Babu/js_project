function hello(){
    console.log("hello")
}

hello()

const hellos = () =>{
    console.log("hellos")
}

hellos()

function add(a,b){
    const x = a+b
    console.log(x)
}

add(1,2)

function palindrome(str){
    const val = str.split('').reverse().join('')
    if (str.toLowerCase() === val.toLowerCase()){
        console.log("palindrome")
    }else {
        console.log("not palindrome")
    }

}

palindrome("malayalam")


const greet = (name) =>{
    console.log("greet  "+name)
}

greet("malayalam")

const square = (x) =>{
    const val = x*x
    console.log(x)
}

for (let i = 0; i < 5; i++){
    square(i)
}
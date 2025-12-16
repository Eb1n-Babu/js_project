const add = () => {
    const x = parseFloat(document.getElementById("num1").value);
    const y = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = x+y;
}
const sub = () => {
    const x = parseFloat(document.getElementById("num1").value);
    const y = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = x-y;
}
const mul = () => {
    const x = parseFloat(document.getElementById("num1").value);
    const y = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = x*y;
}
const div = () => {
    const x = parseFloat(document.getElementById("num1").value);
    const y = parseFloat(document.getElementById("num2").value);
    document.getElementById("result").innerHTML = x/y;
}
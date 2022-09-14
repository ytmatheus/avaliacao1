
function calcMult() {
    let num1 = document.getElementsByName("n1")[0].value;
    let num2 = document.getElementsByName("n2")[0].value;
    let res = Number(num1)*(num2)
    document.getElementsByName("resultado")[0].value = res;
}
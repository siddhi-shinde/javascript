let Calculator={
    add:(a,b)=>a+b,
    substract:(a,b)=>a-b,
    multiply:(a,b)=>a*b,
    divide:(a,b)=>a/b
};

function calculate(n){
    let number1=Number(document.getElementById('num1').value)
    let number2=Number(document.getElementById('num2').value)
    let result

    if(n=='add') result=Calculator.add(number1,number2)
    if(n=='sub') result=Calculator.substract(number1,number2)
    if(n=='mult') result=Calculator.multiply(number1,number2)
    if(n=='div') result=Calculator.divide(number1,number2)
    
    document.getElementById("calculate").innerHTML=result
}
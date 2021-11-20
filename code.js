
let add = (a, b) => (a + b);
let subtract = (a, b) => a - b;
let multiply = (a, b) => a*b
let divide = (a, b) => b==0 ? "Error" : (a/b);

function operate(op, a, b){
    if(op == "+"){
        return add(a,b);
    }
    else if(op == "-"){
        return subtract(a,b);
    }
    else if(op == "*"){
        return multiply(a,b);
    }
    else if(op == "/"){
        return divide(a,b);
    }
}

let displayValue = "0";
let buttons = document.querySelectorAll("button");

function updateDisplay(){
    if(displayValue.length >= 9){
        displayValue = displayValue.substring(0, 9);
    }
    const display = document.getElementById("display");
    display.innerHTML = displayValue;
}

updateDisplay();
let firstNum = null;
let secondNum = null;
let firstOperator = null;
let secondOperator = null;
let result;



function buttonClick(){
    buttons.forEach(element => {
        element.addEventListener('click', function(){
            if(element.className == 'num'){
                if(displayValue == "0"){
                    displayValue = element.value.toString();
                    updateDisplay();
                }
                else{
                    displayValue += element.value.toString();
                    updateDisplay();
                }

                if(firstOperator != null){
                    secondNum = Number(displayValue);
                }

            }
            if(element.className == 'operator'){
                if(firstOperator == null){
                    firstOperator = element.value;
                    firstNum = Number(displayValue);
                    displayValue = "0";
                }
                else{
                    secondNum = Number(displayValue);
                }
                
                
            }
            if(element.className == 'equals'){
                if(firstOperator != null){
                    displayValue = operate(firstOperator, firstNum, secondNum).toString();
                    console.log(displayValue);
                    updateDisplay();
                    firstOperator = null;
                    secondOperator = null;
                }
            }
            if(element.className == 'AC'){
                firstNum = null;
                secondNum = null;
                firstOperator = null;
                displayValue = "0";
                updateDisplay();
            }
        })
    });
}
buttonClick();




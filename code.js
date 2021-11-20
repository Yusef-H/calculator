
let add = (a, b) => (a + b);
let subtract = (a, b) => a - b;
let multiply = (a, b) => a*b
let divide = (a, b) => b==0 ? "عمتقسم على 0 يا حمار؟" : (a/b);

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
    const display = document.getElementById("display");
    
    if(displayValue == "عمتقسم على 0 يا حمار؟"){
        display.style.fontSize = "25px";
    }
    display.innerHTML = displayValue;
    if(displayValue.length >= 9){
        displayValue = displayValue.substring(0, 9);
    }
    
}

updateDisplay();
let firstNum = null;
let secondNum = null;
let firstOperator = null;
let secondOperator = null;
let result;
let dot = false;



function buttonClick(){
    buttons.forEach(element => {
        element.addEventListener('click', function(){
            if(element.className == 'num' || element.id == 'zero'){
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
                else if(secondOperator == null){
                    secondNum = Number(displayValue);
                    secondOperator = element.value;
                    firstNum = operate(firstOperator, firstNum, secondNum);
                    displayValue = firstNum.toString();
                    updateDisplay();
                    firstOperator = secondOperator;
                    secondOperator = null;
                    displayValue = "0";
                }
                if(firstOperator != null && secondOperator == null){
                    secondNum = Number(displayValue);
                }
                if(secondOperator){}
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
                secondOperator = null;
                displayValue = "0";
                updateDisplay();
            }
            if(element.id == 'dot'){
                if(dot == false){
                    dot = true;
                    displayValue += ".";
                    updateDisplay();
                }
                
            }
        
        })
    });
}
buttonClick();




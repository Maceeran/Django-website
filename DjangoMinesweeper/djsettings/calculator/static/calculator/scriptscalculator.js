function res(){
    document.getElementById("result").innerHTML = "";
};

function digitPressed(digit){
    digit = digit.getElementsByClassName("text");
    digit = digit[0].innerHTML;
    digit = digit.toString();
    digit = parseInt(digit);
    
    document.getElementById("result").innerHTML += digit;
};

function addition(){
    checkLastCharacter();
    document.getElementById("result").innerHTML += "+";
};

function subtraction(){
    checkLastCharacter();
    document.getElementById("result").innerHTML += "-";
};

function division(){
    checkLastCharacter();
    document.getElementById("result").innerHTML += "/";
};

function multiplication(){
    checkLastCharacter();
    document.getElementById("result").innerHTML += "*";
};

function equalTo(){
    result = document.getElementById("result").innerHTML;
    result.toString();
    result = eval(result);
    document.getElementById("result").innerHTML = result;
};

function clearEntry(){
    document.getElementById("result").innerHTML = '';
};

function checkLastCharacter(){
    lastChar = document.getElementById("result").innerHTML;
    result = lastChar;
    lastChar.toString();
    lastChar = lastChar.slice(-1);
    
    if (lastChar == '+' || lastChar == '-' || lastChar == '/' || lastChar == '*'){
        document.getElementById("result").innerHTML = result.slice(0, result.length - 1);
    }
}
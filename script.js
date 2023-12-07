function clearScreen(){
    let screen = document.getElementById('screen');
    screen.value = "0";
}
function evaluate_expression(){
    let screen = document.getElementById('screen');
    let result = eval(screen.value);
    screen.value = result;
}

var power = false;
function screenOn(){
    if(power==false){
        clearScreen();
        power = true;
    }else{
        document.getElementById('screen').value = "";
        power = false
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.button');
    let screen = document.getElementById('screen');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            if(screen.value == "0"){
                screen.value = button.textContent;
            }else{
                screen.value = screen.value + button.textContent;
            }
        });
    });
});
var displayContainer = document.querySelector('.display');
var displayExpression = document.querySelector('.display .espression');
var displayResult = document.querySelector('.display .result');
var isResulHidden = function () { return displayResult.classList.contains('hidden'); };
var isResulShown = function () { return isResulHidden(); };
var getResultValue = function () {
    return displayResult.innerText === 'Math Error' ? '0' : displayResult.innerText;
};
var isSymbol = function (button) { return /[\+\-\*\/]$/.test(button.innerHTML); };
document.querySelectorAll('button').forEach(function (button) { return button.addEventListener('click', function () { return handleButtonClick(button); }); });
function handleButtonClick(button) {
    switch (button.innerHTML) {
        case 'C': {
            displayExpression.innerHTML = '0';
            displayResult.classList.add('hidden');
            break;
        }
        case '=': {
            try {
                displayResult.classList.remove('hidden');
                displayResult.innerHTML = String(eval(displayExpression.innerHTML));
            }
            catch (_a) {
                displayResult.innerHTML = "Error";
            }
            break;
        }
        default: {
            if (isResulShown()) {
                displayExpression.innerHTML = isSymbol(button) ? getResultValue() : '0';
                displayResult.classList.add('hidden');
            }
            if (displayExpression.innerHTML == '0') {
                displayExpression.innerHTML = button.innerHTML == '00' ? '0' : button.innerHTML;
            }
            else {
                displayExpression.innerHTML += button.innerHTML;
            }
        }
    }
}

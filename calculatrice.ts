const displayContainer = document.querySelector('.display');
const displayExpression = document.querySelector('.display .espression') as HTMLElement;
const displayResult = document.querySelector('.display .result') as HTMLElement;

const isResulHidden = () => displayResult.classList.contains('hidden');
const isResulShown = () => isResulHidden();
const getResultValue = () => {
    return displayResult.innerText === 'Math Error' ? '0' : displayResult.innerText;
  }
const isSymbol = (button: HTMLElement) => /[\+\-\*\/]$/.test(button.innerHTML);

document.querySelectorAll('button').forEach(button => button.addEventListener('click', () => handleButtonClick(button as HTMLElement)));

function handleButtonClick(button: HTMLElement) {
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
            } catch {
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
            } else {
                displayExpression.innerHTML += button.innerHTML;
            }
        }
    }
}
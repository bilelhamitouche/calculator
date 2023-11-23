
// storing all buttons 
const buttons = document.querySelectorAll('button');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const previous = document.querySelector('.previous');
const current = document.querySelector('.current');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');

let displayValue = '';

// operation functions
const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    if (b === '0') return 'oops';
    return a / b;
}

// operate function
const operate = (operation, number1, number2) => {
    switch (operation) {
    case '+':
	return add(number1, number2);
	break;
    case '-':
	return subtract(number1, number2);
	break;
    case 'x':
	return multiply(number1, number2);
	break;
    case '/':
	return divide(number1, number2);
	break;
    }
}

// event listeners for numbers
numbers.forEach((num) => {
    num.addEventListener('click', () => {
	current.textContent += num.textContent;
	displayValue += num.textContent;
    })
})

// event listeners for operators
operators.forEach((opr) => {
    opr.addEventListener('click', () => {
	if (previous.textContent.includes('+') || previous.textContent.includes('-') || previous.textContent.includes('x') || previous.textContent.includes('/') && previous.textContent.indexOf('-') !== 0) {
	    previous.textContent = operate(previous.textContent[previous.textContent.length - 1], previous.textContent.slice(0, -1), current.textContent) + opr.textContent;
	} else {
	    previous.textContent = current.textContent + opr.textContent;
	}
	current.textContent = '';
    })
})

// event listener for clear
clear.addEventListener('click', () => {
    previous.textContent = '';
    current.textContent = '';
})

equal.addEventListener('click', () => {
    displayValue = operate(previous.textContent[previous.textContent.length - 1], previous.textContent.slice(0, -1), current.textContent);
    current.textContent = displayValue;
})

// change background of button when hovering
buttons.forEach((btn) => {
    btn.addEventListener('mouseover', () => {
	btn.style.backgroundColor = '#dddddd'; 
    })
    btn.addEventListener('mouseout', () => {
	btn.style.backgroundColor = '#ffffff'; 
    })
})

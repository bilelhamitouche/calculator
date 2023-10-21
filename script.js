

// add
const add = function(a, b) {
    return a + b;
};

// subtract
const subtract = function(a, b) {
    return a - b;
};

// multiply
const multiply = function(a, b) {
    return a * b;
};

// divide
const divide = function(a, b) {
    return b ? a / b : 'Error, division by zero'; 
};

// operate
const operate = function(operator, num1, num2) {
    switch (operator) {
        case add:
	    add(num1, num2);
	    break;
        case subtract:
	    subtract(num1, num2);
	    break;
        case multiply:
	    multiply(num1, num2);
	    break;
        case divide:
	    divide(num1, num2);
	    break;
    }
}

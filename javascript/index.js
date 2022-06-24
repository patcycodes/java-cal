const numberOne = parseInt(prompt('Input First Data'));

const numberTwo = parseInt(prompt('Input Second Data'));

const solve = prompt('Input Operator (+,-,*,/)');

if (solve === '+') {
    let add = (numberOne + numberTwo);
    alert(add);
} else
if (solve === '-') {
    alert(numberOne-numberTwo);
} else
    if (solve === '*') {
    alert(numberOne*numberTwo);
} else
    if (solve === '/') {
    alert(numberOne/numberTwo);
}
else {
     alert('wrong');
}
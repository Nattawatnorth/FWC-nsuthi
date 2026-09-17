const leftInput = document.getElementById('left-val');
const rightInput = document.getElementById('right-val');
const operatorSelect = document.getElementById('operator');
const submitBtn = document.getElementById('submit-btn');

const isValid = (str) => /^\d+$/.test(str);

submitBtn.addEventListener('click', function() {
    if (!isValid(leftInput.value) || !isValid(rightInput.value)) {
        alert('Error :(');
        return;
    }

    const leftVal = Number(leftInput.value);
    const rightVal = Number(rightInput.value);
    const op = operatorSelect.value;

    if ((op === '/' || op === '%') && rightVal === 0) {
        alert("It's over 9000!");
        return;
    }

    let result;
    switch (op) {
        case '+': result = leftVal + rightVal; break;
        case '-': result = leftVal - rightVal; break;
        case '*': result = leftVal * rightVal; break;
        case '/': result = leftVal / rightVal; break;
        case '%': result = leftVal % rightVal; break;
    }

    alert(result);
    console.log(result);
});

setInterval(function() {
    alert('Please, use me...');
}, 30000);
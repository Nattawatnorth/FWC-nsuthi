$(document).ready(function () {
    const isValid = (str) => /^\d+$/.test(str);

    $('#submit-btn').click(function () {
        const leftStr = $('#left-val').val();
        const rightStr = $('#right-val').val();
        const op = $('#operator').val();

        if (!isValid(leftStr) || !isValid(rightStr)) {
            alert('Error :(');
            return;
        }

        const leftVal = Number(leftStr);
        const rightVal = Number(rightStr);

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

    setInterval(function () {
        alert('Please, use me...');
    }, 30000);
});

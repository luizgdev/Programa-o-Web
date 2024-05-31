exports.calculate = (num1, num2, operation) => {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Erro: Divisão por zero';
        default:
            return 'Operação inválida';
    }
};

exports.getOperationName = (operation) => {
    switch (operation) {
        case '+':
            return 'Adição';
        case '-':
            return 'Subtração';
        case '*':
            return 'Multiplicação';
        case '/':
            return 'Divisão';
        default:
            return 'Operação inválida';
    }
};

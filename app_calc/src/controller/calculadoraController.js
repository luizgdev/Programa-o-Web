const calculadora = require('../calculadora/calculadora');

exports.showForm = (req, res) => {
    res.render('index');
};

exports.calculate = (req, res) => {
    const { num1, num2, operation } = req.body;

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
        res.render('error', { message: 'Por favor, insira números válidos.' });
        return;
    }

    const result = calculadora.calculate(number1, number2, operation);
    const operationName = calculadora.getOperationName(operation);

    res.render('resultado', { num1: number1, num2: number2, operation: operationName, result });
};

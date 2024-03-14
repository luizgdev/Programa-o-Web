function verificarNumeroPrimo(n) {
    if (n > 1) {
        for (let i = 2; i < Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

function mostraResultado(func, n) {
    func == true ? console.log(`O número ${n} é primo.`) : console.log(`O número ${n} não é primo.`)
}

mostraResultado(verificarNumeroPrimo(0), 0); //false
mostraResultado(verificarNumeroPrimo(1), 1); //false
mostraResultado(verificarNumeroPrimo(2), 2); //true
mostraResultado(verificarNumeroPrimo(3), 3); //true
mostraResultado(verificarNumeroPrimo(7), 7); //true
mostraResultado(verificarNumeroPrimo(83), 83); //true
mostraResultado(verificarNumeroPrimo(100), 100); //false
mostraResultado(verificarNumeroPrimo(991), 991); //true
mostraResultado(verificarNumeroPrimo(104729), 104729); //true
mostraResultado(verificarNumeroPrimo(14348907), 14348907); //false
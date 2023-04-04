let saldo = 1000;

function depositar(saldoAtual , valorAAcrecentar){
    return  saldoAtual + valorAAcrecentar;
}

function saque(saldoAtual , valorADecrementar){
    return  saldoAtual - valorADecrementar;
}

function render(saldoAtual , taxaDeRendimento){
    return  saldoAtual * taxaDeRendimento;
}

function cobranca(saldoAtual , taxaDaCobranca){
    return  saldoAtual / taxaDaCobranca;
}

console.log(depositar(saldo, 200));
console.log(saque(saldo, 200));
console.log(render(saldo, 1.2));
console.log(cobranca(saldo, 1.25));
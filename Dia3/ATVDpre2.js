let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function adiconaCliente(cliente){
    if(typeof cliente === "string"){

        return clientesTrybeBank.push(cliente);
    }else{
        console.group('o valor deve ser uma string');
    }
}

function removecliente(cliente){
    if(typeof cliente === "string"){
        for (let index = 0; index < clientesTrybeBank.length; index += 1) {
            if (cliente === clientesTrybeBank[index]) {
              clientesTrybeBank.splice(index, 1);
              clienteEncontrado = true;
              return 'Cliente excluída(o) com sucesso.';
            }
          }
    }else{
        console.group('o valor deve ser uma string');
    }
}

adiconaCliente('Matheus');
console.log(clientesTrybeBank);
removecliente('Matheus');
console.log(clientesTrybeBank);

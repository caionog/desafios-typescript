// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');


let saldoTotal = 0;
function limparSoma():void
{
    soma.value= "";
}

function somarAoSaldo(soma:number) {
    if(campoSaldo)
    {
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();

    }
    
}

function limparSaldo() {
    if(campoSaldo)
    {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
        
    }
    
}

botaoAtualizar?.addEventListener('click', function () {
    if(campoSaldo != null)
    {
        let mostrarSoma:number = 0;
        mostrarSoma = parseInt(soma.value);
        somarAoSaldo(mostrarSoma);
        soma.value = '';

      if(isNaN(parseInt(campoSaldo.innerHTML)))
      {
        window.alert("Insira um numero para realizar a operação!");
        limparSaldo();

      }
    }

});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */
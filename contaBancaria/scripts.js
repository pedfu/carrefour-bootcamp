class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this.saldo;
    }

    set saldo(valor) {
        this.saldo = valor;
    }

    sacar(valor) {
        if(valor > this._saldo) {
            return 'Operacao negada!';
        }
        this._saldo -= valor;

        return this._saldo;
    }

    depositar(valor) {
        this._saldo += valor;

        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(cartao) {
        this._cartaoCredito = cartao;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupanca';
    }
}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(valor) {
        if(valor > 500 || valor > this._saldo) {
            return 'Operacao negada!';
        }
        this._saldo -= valor;

        return this._saldo;
    }
}
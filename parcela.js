export class Parcela {
  #numero
  #valor
  #juros
  #amortizacao
  #saldo
  constructor(numero, valor, juros, amortizacao, saldo) {
    this.#numero = numero
    this.#valor = valor
    this.#juros = juros
    this.#amortizacao = amortizacao
    this.#saldo = saldo
  }

  getSaldo() {
    return this.#saldo
  }

  getDadosFormatados() {
    const dados = []
    dados.push(this.#numero)
    dados.push(
      this.#valor.toLocaleString('pr-BR', {
        style: 'currency',
        currency: 'BRL'
      })
    )
    dados.push(
      this.#amortizacao.toLocaleString('pr-BR', {
        style: 'currency',
        currency: 'BRL'
      })
    )
    dados.push(
      this.#juros.toLocaleString('pr-BR', {
        style: 'currency',
        currency: 'BRL'
      })
    )
    dados.push(
      this.#saldo.toLocaleString('pr-BR', {
        style: 'currency',
        currency: 'BRL'
      })
    )
    return dados
  }
}

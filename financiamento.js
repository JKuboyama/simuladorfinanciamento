import { Parcela } from './parcela.js'

export class Financiamento {
  #taxaJuros
  #prazo
  #parcelas = []
  constructor(valor, entrada, taxaJuros, prazo) {
    this.#taxaJuros = taxaJuros
    this.#prazo = prazo
    //composição - financiamento possui ou tem parcelas
    this.#parcelas.push(new Parcela(0, 0, 0, 0, valor - entrada)) //aqui faremos 1 parcela a mais pq a primeira vai ser só pra chamar o saldo devedor logo no início
  }

  static calcJuros(valor, taxaJuros) {
    return valor * (taxaJuros / 100)
  }

  calcParcelasMensais() {
    let saldo = this.#parcelas[this.#parcelas.length - 1].getSaldo()
    //vai pegar sempre a última parcela

    let prazo = this.#prazo - (this.#parcelas.length - 1)
    //para ir sempre diminuindo as parcelas em 1

    let amortizacao = saldo / prazo

    for (let i = 0; i < prazo; i++) {
      const numero = this.#parcelas.length
      const juros = Financiamento.calcJuros(saldo, this.#taxaJuros)
      const valor = juros + amortizacao
      saldo -= amortizacao
      if (saldo < 0) {
        saldo = 0
      }
      this.#parcelas.push(new Parcela(numero, valor, juros, amortizacao, saldo))
    }
  }

  exibeParcelas() {
    const parcelas = this.#parcelas.slice(1) //vai pegar as parcelas a partir da posição 1 (a posição 0 não vem)
    for (const parcela of parcelas) {
      const linhaTabela = corpoTabela.insertRow(-1) //-1 indica que é no final
      for (const dado of parcela.getDadosFormatados()) {
        const celulaTabela = linhaTabela.insertCell(-1)
        celulaTabela.textContent = dado
        //isso fará com que cada dados.push do método getDadosFormatados vá sendo adicionado na tabela nos lugares certos
      }
    }
  }

  getParcelas() {
    return this.#parcelas
  }
}
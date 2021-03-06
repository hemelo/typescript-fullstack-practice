import { Comparable } from "../contracts/comparavel";
import { ToString } from "../contracts/logavel";

export class Negociacao implements ToString, Comparable<Negociacao> {
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        return new Date(this._data.getTime());
    }

    static builderFromString(dataString: string, quantidadeString: string, valorString: string): Negociacao{
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }

    public toString(): string {
        return`
            Data: ${this.data}
            Quantidade: ${this.quantidade}
            Valor ${this.valor}
        `
    }

    public compare(negociacao: Negociacao): boolean{
       return this.data.getDate() === negociacao.data.getDate() &&
            this.data.getMonth() === negociacao.data.getMonth() &&
            this.data.getFullYear() === negociacao.data.getFullYear()
    }
}
import { Preco } from "./preco.model";

export class Pizza {

    constructor(public id?: number,
                public nome?: string,
                public descricao?: string,
                public precos?: Preco){}
}
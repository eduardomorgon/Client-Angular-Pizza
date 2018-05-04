import { Endereco } from "./endereco.model";

export class Cliente {

  constructor(
    public id?: number,
    public telefone?: string,
    public nome?: string,
    public endereco?: Endereco
  ){ }

}
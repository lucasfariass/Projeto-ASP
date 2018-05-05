import { Endereco } from "./endereco";

export class Paciente {
    nome: string;
    cpf: string;
    nomeMae: string;
    homem: boolean;
    dataNasc: Date;
    endereco: Endereco;
    emEspera: boolean;
}
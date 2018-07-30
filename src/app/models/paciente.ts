import { Endereco } from "./endereco";

export class Paciente {
    key: string;
    nome: string;
    cpf: string;
    nomeMae: string;
    homem: boolean;
    dataNasc: Date;
    endereco: Endereco;
    emEspera: boolean;
}
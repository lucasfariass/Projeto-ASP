import { Paciente } from "./paciente";
import { Localidade } from "./localidade";

export class Ficha {
    posicao: number;
    dataAtend: Date;
    sintomas: string;
    doenca: string;
    hipertenso: boolean;
    alergico: boolean;
    diabetico: boolean;
    prescricao: string;
    paciente: Paciente;
    observacoes: boolean;
    localidade: Localidade;
}
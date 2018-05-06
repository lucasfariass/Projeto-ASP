import { Injectable } from '@angular/core';
import { Ficha } from './models/ficha';
import { Localidade } from './models/localidade';

@Injectable()
export class GeralService {

  fichas : Array<Ficha> = new Array<Ficha>();
  unidades : Array<Localidade> = new Array<Localidade>();
  ficha: Ficha = new Ficha();
  unidadeNome: string;

  constructor() { }

  addFicha(ficha){
    this.fichas.push(ficha);
    ficha.posicao = this.fichas.indexOf(ficha) + 1;
  }

  removeFicha(indexFicha){
    this.fichas.splice(indexFicha-1, 1)
    for (let ficha of this.fichas){
      ficha.posicao = this.fichas.indexOf(ficha) + 1;
    }
  }

  getFicha(indexFicha){
    this.ficha = this.fichas[indexFicha - 1];
  }

  getUnidade(nomeUnidade){
    this.unidadeNome = nomeUnidade;  
  }

  addUnidade(){ // SEM REPETIÇÕES
    if(this.fichas.length == 1 && this.unidades.length == 0 && this.fichas[0].localidade.nome){
      this.unidades.push(this.fichas[0].localidade);
    }
    else{
      for (let i = 0; i < this.fichas.length; i++)  {
        let ultimaPos = this.unidades[this.unidades.length - 1].nome;
        if (this.fichas[i].localidade.nome != ultimaPos){
          this.unidades.push(this.fichas[i].localidade);
          for (let j = this.unidades.length - 2; j >= 0; j--) {
            ultimaPos = this.unidades[this.unidades.length - 1].nome;
            if(ultimaPos == this.unidades[j].nome){
              this.unidades.splice(this.unidades.length - 1, 1)
            }     
          }  
        }  
      }
    }
  }

  addFichaAtualizada(fichaAtualizada){
    fichaAtualizada.posicao = this.ficha.posicao;
    this.fichas.splice(fichaAtualizada.posicao - 1, 1, fichaAtualizada);
  }

}

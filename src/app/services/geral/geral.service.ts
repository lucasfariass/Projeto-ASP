import { Injectable } from '@angular/core';
import { Ficha } from './../../models/ficha';
import { Localidade } from './../../models/localidade';
import { DatabaseService } from '../database/database.service';
import { ENDPOINTS } from '../../endpoints';

@Injectable()
export class GeralService {

  unidade : Localidade = new Localidade();
  ficha: Ficha = new Ficha();

  constructor(private database : DatabaseService) {
  }

  setFicha(ficha){
    this.ficha = ficha;
  }

  setUnidade(unidade){
    this.unidade = unidade;  
  }

  // addUnidade(){ // SEM REPETIÇÕES
  //   if(this.fichas.length == 1 && this.unidades.length == 0 && this.fichas[0].localidade.nome){
  //     this.unidades.push(this.fichas[0].localidade);
  //   }
  //   else{
  //     for (let i = 0; i < this.fichas.length; i++)  {
  //       let ultimaPos = this.unidades[this.unidades.length - 1].nome;
  //       if (this.fichas[i].localidade.nome != ultimaPos){
  //         this.unidades.push(this.fichas[i].localidade);
  //         for (let j = this.unidades.length - 2; j >= 0; j--) {
  //           ultimaPos = this.unidades[this.unidades.length - 1].nome;
  //           if(ultimaPos == this.unidades[j].nome){
  //             this.unidades.splice(this.unidades.length - 1, 1)
  //           }     
  //         }  
  //       }  
  //     }
  //   }
  // }

}

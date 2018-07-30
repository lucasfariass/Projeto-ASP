import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Ficha } from '../../models/ficha';
import { ENDPOINTS } from '../../endpoints';

@Injectable()
export class DatabaseService {

  fichas: Array<any>;

  constructor(private firebase: AngularFireDatabase) {
  }

  getAll(endpoint) {
    return this.firebase.list(endpoint).snapshotChanges()
      .map(element => {
        return element.map(objeto => ( { key: objeto.payload.key, ...objeto.payload.val() }))
      })
  }

  get(endpoint, key: string) {
    return this.firebase.object(endpoint + key).snapshotChanges()
      .map(ficha => {
        return { key: ficha.key, ...ficha.payload.val() };
      });
  }

  getPacientesByUnidade(unidade){
    this.fichas = new Array<any>();
    this.firebase.list(ENDPOINTS.fichas).query.orderByChild('/localidade/nome').equalTo(unidade.nome)
      .once('value', snapshot => {
        snapshot.forEach(childSnapshot => { 
          let ficha : Ficha;
          ficha = childSnapshot.val();
          this.fichas.push(ficha);
          return false;
        });
    });
  }

  post(endpoint, objeto){
    return this.firebase.list(endpoint).push(objeto)
  }

  deleteFicha(ficha) {
    return this.firebase.list('fichas').remove(ficha.key);
  }

  put(endpoint, objeto) {
    return new Promise((resolve, reject) => {
      this.firebase.list(endpoint).set(objeto.key, objeto)
        .then(() => resolve())
        .catch((err) => reject(err))
    })
  }
}

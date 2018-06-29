import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DatabaseService {

  fichasRef: AngularFireList<any>;
  fichas: Observable<any[]>;

  constructor(private fb: AngularFireDatabase) {
    this.fichasRef = this.fb.list('fichas');
    this.fichas = this.fichasRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  getAll() {
    return this.fichas;
  }

  get(key: string) {
    return this.fb.object('fichas' + key).snapshotChanges()
      .map(ficha => {
        return { key: ficha.key, ...ficha.payload.val() };
      });
  }

  post(endpoint, objeto){
    return this.fb.list(endpoint).push(objeto)
  }
}

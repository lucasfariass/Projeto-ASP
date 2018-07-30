import { Component, OnInit } from '@angular/core';
import { Ficha } from '../models/ficha';
import { GeralService } from '../services/geral/geral.service';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database/database.service';
import { Observable } from 'rxjs';
import { ENDPOINTS } from '../endpoints';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  fichaAux: Ficha;
  fichasArray: Array<any> = new Array<any>();
  fichas: Observable<Ficha[]>;

  constructor(private router: Router, private service : GeralService, private database: DatabaseService) {
  }

  ngOnInit() {
    this.fichas = this.database.getAll(ENDPOINTS.fichas);
    this.convertToArray();
  }

  convertToArray(){
    this.fichasArray = new Array<any>();
    return this.fichas.forEach(value => {
      value.map(objeto => { 
        this.fichasArray.push(objeto)
      })
    });
  }

  recebeFicha(ficha){
    this.fichaAux = ficha;
  }

  removeFicha(ficha){
    let index = this.fichasArray.indexOf(ficha);
    this.fichasArray.splice(index, 1);
    this.database.deleteFicha(ficha);
    this.fichasArray = new Array<any>();
  }

  editaFicha(ficha){
    this.service.setFicha(ficha);
    this.router.navigate(['/editar']);
  }

  visualizaFicha(ficha){
    this.service.setFicha(ficha);
    this.router.navigate(['/visualizar-ficha']);
  }

}

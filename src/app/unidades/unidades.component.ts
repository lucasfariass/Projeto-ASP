import { Component, OnInit } from '@angular/core';
import { Ficha } from '../models/ficha';
import { GeralService } from '../services/geral/geral.service';
import { Router } from '@angular/router';
import { Localidade } from '../models/localidade';
import { Observable } from 'rxjs';
import { DatabaseService } from '../services/database/database.service';
import { ENDPOINTS } from '../endpoints';


@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css']
})
export class UnidadesComponent implements OnInit {

  unidades: Observable<Ficha[]>;
  unidadesArray: Array<any> = new Array<any>();

  constructor(private router: Router, private service : GeralService, private database: DatabaseService) { 
  }

  ngOnInit() {
    this.unidades = this.database.getAll(ENDPOINTS.unidades);
    this.convertToArray();
  }

  convertToArray(){
    this.unidadesArray = new Array<any>();
    return this.unidades.forEach(value => {
      value.map(objeto => { 
        this.unidadesArray.push(objeto)
      })
    });
  }

  visualizaUnidade(unidade){
    this.service.setUnidade(unidade);
    this.router.navigate(['/visualizar-unidade']);
  }
}

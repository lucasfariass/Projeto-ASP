import { Component, OnInit } from '@angular/core';
import { Ficha } from '../models/ficha';
import { GeralService } from '../services/geral/geral.service';
import { Router } from '@angular/router';
import { Localidade } from '../models/localidade';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css']
})
export class UnidadesComponent implements OnInit {

  unidades: Array<Localidade> = new Array<Localidade>();

  constructor(private router: Router, private service : GeralService) { 
    this.unidades = this.service.unidades;
  }

  ngOnInit() {
    this.service.addUnidade();
  }

  visualizaUnidade(nomeUnidade){
    this.service.getUnidade(nomeUnidade);
    this.router.navigate(['/visualizar-unidade']);
  }
}

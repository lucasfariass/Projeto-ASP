import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ficha } from '../../models/ficha';
import { GeralService } from '../../geral.service';


@Component({
  selector: 'app-visualizar-unidade',
  templateUrl: './visualizar-unidade.component.html',
  styleUrls: ['./visualizar-unidade.component.css']
})
export class VisualizarUnidadeComponent implements OnInit {

  nomeUnidade: string;
  fichas: Array<Ficha> = new Array<Ficha>();
  unidadeFichas: Array<Ficha> = new Array<Ficha>();

  constructor(private router: Router, private service: GeralService) { 
    this.nomeUnidade = this.service.unidadeNome;
    this.fichas = this.service.fichas;
  }

  ngOnInit() {
    for (let i = 0; i < this.service.fichas.length; i++) {
      if(this.fichas[i].localidade.nome === this.nomeUnidade){
        this.unidadeFichas.push(this.fichas[i]);
      }     
    }
  }

  fechaUnidade(){
    this.router.navigate(['/unidades']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Ficha } from '../models/ficha';
import { GeralService } from '../geral.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  listaEspera: Array<Ficha> = new Array<Ficha>();
  posicao: number;

  constructor(private router: Router, private service : GeralService) {
      this.listaEspera = this.service.fichas;
  }

  ngOnInit() {
  }

  recebePosicao(index){
    this.posicao = index;
  }

  removeFicha(indexRemover){
    this.service.removeFicha(indexRemover);
  }

  editaFicha(indexEditar){
    this.service.getFicha(indexEditar);
    this.router.navigate(['/editar']);
  }

  visualizaFicha(indexVisualizar){
    this.service.getFicha(indexVisualizar);
    this.router.navigate(['/visualizar-ficha']);
  }

}

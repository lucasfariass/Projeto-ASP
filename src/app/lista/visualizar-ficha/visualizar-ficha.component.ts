import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ficha } from '../../models/ficha';
import { GeralService } from '../../services/geral/geral.service';

@Component({
  selector: 'app-visualizar-ficha',
  templateUrl: './visualizar-ficha.component.html',
  styleUrls: ['./visualizar-ficha.component.css']
})
export class VisualizarFichaComponent implements OnInit {

  ficha: Ficha = new Ficha();

  constructor(private router: Router, private service: GeralService) { 
    this.ficha = this.service.ficha;
  }

  ngOnInit() {
  }

  removeFicha(indexRemover){
    this.service.removeFicha(indexRemover);
    this.router.navigate(['/lista-espera'])
  }

  editaFicha(indexEditar){
    this.service.getFicha(indexEditar);
    this.router.navigate(['/editar']);
  }

  fechaFicha(){
    this.router.navigate(['/lista-espera']);
  }

}

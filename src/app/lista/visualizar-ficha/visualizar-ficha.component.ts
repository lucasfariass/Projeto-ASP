import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ficha } from '../../models/ficha';
import { GeralService } from '../../services/geral/geral.service';
import { DatabaseService } from '../../services/database/database.service';

@Component({
  selector: 'app-visualizar-ficha',
  templateUrl: './visualizar-ficha.component.html',
  styleUrls: ['./visualizar-ficha.component.css']
})
export class VisualizarFichaComponent implements OnInit {

  ficha: Ficha = new Ficha();

  constructor(private router: Router, private service: GeralService, private fireDataBase: DatabaseService) { 
    this.ficha = this.service.ficha;
  }

  ngOnInit() {
  }

  removeFicha(ficha){
    this.fireDataBase.deleteFicha(ficha);
    this.router.navigate(['/lista-espera'])
  }

  editaFicha(ficha){
    this.service.setFicha(ficha);
    this.router.navigate(['/editar']);
  }

  fechaFicha(){
    this.router.navigate(['/lista-espera']);
  }

}

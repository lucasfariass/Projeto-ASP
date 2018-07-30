import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ficha } from '../../models/ficha';
import { Localidade } from '../../models/localidade';
import { DatabaseService } from '../../services/database/database.service';
import { GeralService } from '../../services/geral/geral.service';


@Component({
  selector: 'app-visualizar-unidade',
  templateUrl: './visualizar-unidade.component.html',
  styleUrls: ['./visualizar-unidade.component.css']
})
export class VisualizarUnidadeComponent implements OnInit {

  unidade: Localidade = new Localidade();

  constructor(private router: Router, private database: DatabaseService, private service: GeralService) {
    this.unidade = this.service.unidade; 
  }

  ngOnInit() {
    this.database.getPacientesByUnidade(this.unidade)
  }

  fechaUnidade(){
    this.router.navigate(['/unidades']);
  }

}

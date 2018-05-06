import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Ficha } from '../../models/ficha';
import { GeralService } from '../../geral.service';
import { EditarService } from './editar.service';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  ficha: Ficha = new Ficha();

  constructor(private router: Router, private serviceGeral: GeralService, private serviceEditar: EditarService) { 
      this.ficha = this.serviceGeral.ficha;
  }

  ngOnInit() {}

  recebeFichaAtualizada(){
    this.serviceEditar.recebeFichaAtualizada();
  }

  cancelaEdicao(){
    this.router.navigate(['/lista-espera'])
  }
}

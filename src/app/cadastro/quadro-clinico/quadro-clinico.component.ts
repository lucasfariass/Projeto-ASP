import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CadastroService } from '../cadastro.service';
import { Ficha } from '../../models/ficha';
import { EditarService } from '../../lista/editar/editar.service';

@Component({
  selector: 'app-quadro-clinico',
  templateUrl: './quadro-clinico.component.html',
  styleUrls: ['./quadro-clinico.component.css']
})
export class QuadroClinicoComponent implements OnInit {

  @Input() ficha: Ficha;

  quadroClinico: FormGroup;

  constructor(
    private serviceCadastro: CadastroService, 
    private formBuilder: FormBuilder,
    private serviceEditar: EditarService
  ) { }

  ngOnInit() {

    if(this.ficha){
      this.quadroClinico = this.formBuilder.group({
        formQuadroClinico: this.formBuilder.group({
          key:[this.ficha.key],
          dataAtend: [this.ficha.dataAtend],
          sintomas: [this.ficha.sintomas],
          doenca: [this.ficha.doenca],
          hipertenso: [this.ficha.hipertenso],
          alergico: [this.ficha.alergico],
          diabetico: [this.ficha.diabetico],
          observacoes: [this.ficha.observacoes],
          prescricao: [this.ficha.prescricao]
        })  
      }) 
      this.serviceEditar.quadroClinico = this.quadroClinico;
    }
    else{
      this.quadroClinico = this.formBuilder.group({
        formQuadroClinico: this.formBuilder.group({
          key:[null],
          dataAtend: [null],
          sintomas: [null],
          doenca: [null],
          hipertenso: [null],
          alergico: [null],
          diabetico: [null],
          observacoes: [null],
          prescricao: [null]
        })  
      }) 
      this.serviceCadastro.quadroClinico = this.quadroClinico;
    }   
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CadastroService } from '../cadastro.service';
import { Ficha } from '../../models/ficha';
import { EditarService } from '../../lista/editar/editar.service';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent implements OnInit {

  @Input() ficha: Ficha;

  paciente: FormGroup;

  constructor(
    private serviceCadastro: CadastroService, 
    private formBuilder: FormBuilder,
    private serviceEditar: EditarService
  ) { }

  ngOnInit() {

    if(this.ficha){
      this.paciente = this.formBuilder.group({
        formPaciente: this.formBuilder.group({
          nome: [this.ficha.paciente.nome],
          cpf: [this.ficha.paciente.cpf],
          nomeMae: [this.ficha.paciente.nomeMae],
          homem: [this.ficha.paciente.homem],
          dataNasc: [this.ficha.paciente.dataNasc],
          emEspera: [this.ficha.paciente.emEspera]
        }),
      })
      this.serviceEditar.paciente = this.paciente;
    }
    else{
      this.paciente = this.formBuilder.group({
        formPaciente: this.formBuilder.group({
          nome: [null],
          cpf: [null],
          nomeMae: [null],
          homem: [null],
          dataNasc: [null],
          emEspera: [null]
        }),
      })
      this.serviceCadastro.paciente = this.paciente;
    }   
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CadastroService } from '../cadastro.service';
import { Ficha } from '../../models/ficha';
import { EditarService } from '../../lista/editar/editar.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  @Input() ficha: Ficha;

  endereco: FormGroup;

  constructor(
    private serviceCadastro: CadastroService, 
    private formBuilder: FormBuilder,
    private serviceEditar: EditarService
  ) { }

  ngOnInit() {

    if(this.ficha){
      this.endereco = this.formBuilder.group({
        formEndereco: this.formBuilder.group({
          cidade: [this.ficha.paciente.endereco.cidade],
          estado: [this.ficha.paciente.endereco.estado],
          rua: [this.ficha.paciente.endereco.rua],
          numero: [this.ficha.paciente.endereco.numero],
          bairro: [this.ficha.paciente.endereco.bairro],
          cep: [this.ficha.paciente.endereco.cep]
        }),
      })
      this.serviceEditar.endereco = this.endereco;
    }
    else{
      this.endereco = this.formBuilder.group({
        formEndereco: this.formBuilder.group({
          cidade: [null],
          estado: [null],
          rua: [null],
          numero: [null],
          bairro: [null],
          cep: [null]
        }),
      })
      this.serviceCadastro.endereco = this.endereco;
    }
  }
}

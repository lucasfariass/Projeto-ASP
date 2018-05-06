import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CadastroService } from '../cadastro.service';
import { Ficha } from '../../models/ficha';
import { EditarService } from '../../lista/editar/editar.service';

@Component({
  selector: 'app-unidade',
  templateUrl: './unidade.component.html',
  styleUrls: ['./unidade.component.css']
})
export class UnidadeComponent implements OnInit {

  @Input() ficha: Ficha;

  unidade: FormGroup;

  constructor(
    private serviceCadastro: CadastroService, 
    private formBuilder: FormBuilder,
    private serviceEditar: EditarService
  ) { }

  ngOnInit() {

    if(this.ficha){
      this.unidade = this.formBuilder.group({
        formNomeUnidadeAtend: this.formBuilder.group({
          nome: [this.ficha.localidade.nome]
        }),
        formUnidadeAtend: this.formBuilder.group({
          cidade: [this.ficha.localidade.endereco.cidade],
          estado: [this.ficha.localidade.endereco.estado],
          rua: [this.ficha.localidade.endereco.rua],
          numero: [this.ficha.localidade.endereco.numero],
          bairro: [this.ficha.localidade.endereco.bairro],
          cep: [this.ficha.localidade.endereco.cep]
        }),
      })
      this.serviceEditar.unidade = this.unidade;
    }
    else{
      this.unidade = this.formBuilder.group({
        formNomeUnidadeAtend: this.formBuilder.group({
          nome: [null]
        }),
        formUnidadeAtend: this.formBuilder.group({
          cidade: [null],
          estado: [null],
          rua: [null],
          numero: [null],
          bairro: [null],
          cep: [null]
        }),
      })
      this.serviceCadastro.unidade = this.unidade;
    } 
  }
}
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-unidade',
  templateUrl: './unidade.component.html',
  styleUrls: ['./unidade.component.css']
})
export class UnidadeComponent implements OnInit {

  unidade: FormGroup;

  constructor(private service: CadastroService, private formBuilder: FormBuilder) { }

  ngOnInit() {

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

    this.service.unidade = this.unidade;
  }

}
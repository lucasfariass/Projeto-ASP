import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent implements OnInit {

  paciente: FormGroup;

  constructor(private service: CadastroService, private formBuilder: FormBuilder) { }

  ngOnInit() {

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

    this.service.paciente = this.paciente;
  }

}

import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Ficha } from '../../models/ficha';
import { GeralService } from '../../geral.service';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  formulario: FormGroup;
  ficha: Ficha = new Ficha();

  constructor(private router: Router, private service: GeralService, private formBuilder: FormBuilder) { 
      this.ficha = this.service.ficha;
  }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      formPaciente: this.formBuilder.group({
        nome: [this.ficha.paciente.nome],
        cpf: [this.ficha.paciente.cpf],
        nomeMae: [this.ficha.paciente.nomeMae],
        homem: [this.ficha.paciente.homem],
        dataNasc: [this.ficha.paciente.dataNasc],
        emEspera: [this.ficha.paciente.emEspera]
      }),
      formEndereco: this.formBuilder.group({
        cidade: [this.ficha.paciente.endereco.cidade],
        estado: [this.ficha.paciente.endereco.estado],
        rua: [this.ficha.paciente.endereco.rua],
        numero: [this.ficha.paciente.endereco.numero],
        bairro: [this.ficha.paciente.endereco.bairro],
        cep: [this.ficha.paciente.endereco.cep]
      }),
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
      formQuadroClinico: this.formBuilder.group({
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
  }

  recebeFichaAtualizada(){
    this.ficha = this.formulario.value.formQuadroClinico;
    this.ficha.paciente = this.formulario.value.formPaciente;
    this.ficha.paciente.endereco = this.formulario.value.formEndereco;
    this.ficha.localidade = this.formulario.value.formNomeUnidadeAtend;
    this.ficha.localidade.endereco = this.formulario.value.formUnidadeAtend;

    this.service.addFichaAtualizada(this.ficha);
    this.router.navigate(['/lista-espera']);
  }

  cancelaEdicao(){
    this.router.navigate(['/lista-espera'])
  }
}

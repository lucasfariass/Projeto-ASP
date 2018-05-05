import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  endereco: FormGroup;

  constructor(private service: CadastroService, private formBuilder: FormBuilder) { }

  ngOnInit() {

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

    this.service.endereco = this.endereco;
  }

}

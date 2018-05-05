import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-quadro-clinico',
  templateUrl: './quadro-clinico.component.html',
  styleUrls: ['./quadro-clinico.component.css']
})
export class QuadroClinicoComponent implements OnInit {

  quadroClinico: FormGroup;

  constructor(private service: CadastroService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.quadroClinico = this.formBuilder.group({
      formQuadroClinico: this.formBuilder.group({
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

    this.service.quadroClinico = this.quadroClinico;
  }

}

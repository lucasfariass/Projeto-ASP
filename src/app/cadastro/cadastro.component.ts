import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Ficha } from '../models/ficha';
import { GeralService } from '../geral.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router ,private service: CadastroService) {  }

  ngOnInit() {
  }

  recebeFicha(){
    this.service.recebeFicha();
  }

  cancelaFicha(){
    this.router.navigate(['/home'])
  }
}

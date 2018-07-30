import { Injectable } from '@angular/core';
import { Ficha } from '../models/ficha';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from '../services/database/database.service';
import { ENDPOINTS } from '../endpoints';

@Injectable()
export class CadastroService {

  paciente: FormGroup;
  endereco: FormGroup;
  quadroClinico: FormGroup;
  unidade: FormGroup;
  ficha: Ficha = new Ficha();

  constructor(private router: Router, private database: DatabaseService) { }

  recebeFicha(){
    this.ficha = this.quadroClinico.value.formQuadroClinico;
    this.ficha.paciente = this.paciente.value.formPaciente;
    this.ficha.paciente.endereco = this.endereco.value.formEndereco;
    this.ficha.localidade = this.unidade.value.formNomeUnidadeAtend;
    this.ficha.localidade.endereco = this.unidade.value.formUnidadeAtend;

    this.database.post(ENDPOINTS.fichas, this.ficha);
    this.database.post(ENDPOINTS.unidades, this.ficha.localidade);
    this.ficha = new Ficha();
    this.paciente.reset();
    this.endereco.reset();
    this.quadroClinico.reset();
    this.unidade.reset();
    this.router.navigate(['/lista-espera']);
  }
}

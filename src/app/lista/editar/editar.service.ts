import { Injectable } from '@angular/core';
import { Ficha } from '../../models/ficha';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GeralService } from '../../geral.service';

@Injectable()
export class EditarService {

  paciente: FormGroup;
  endereco: FormGroup;
  quadroClinico: FormGroup;
  unidade: FormGroup;
  ficha: Ficha = new Ficha();

  constructor(private router: Router, private service: GeralService) { }

  recebeFichaAtualizada(){
    this.ficha = this.quadroClinico.value.formQuadroClinico;
    this.ficha.paciente = this.paciente.value.formPaciente;
    this.ficha.paciente.endereco = this.endereco.value.formEndereco;
    this.ficha.localidade = this.unidade.value.formNomeUnidadeAtend;
    this.ficha.localidade.endereco = this.unidade.value.formUnidadeAtend;

    this.service.addFichaAtualizada(this.ficha);
    this.router.navigate(['/lista-espera']);
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { UnidadeComponent } from './unidade/unidade.component';
import { QuadroClinicoComponent } from './quadro-clinico/quadro-clinico.component';
import { CadastroComponent } from './cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroService } from './cadastro.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CadastroComponent,
    DadosPessoaisComponent,
    EnderecoComponent,
    UnidadeComponent,
    QuadroClinicoComponent,
  ],
  exports: [
    CadastroComponent,
    DadosPessoaisComponent,
    EnderecoComponent,
    UnidadeComponent,
    QuadroClinicoComponent,
  ],
  providers: [CadastroService],
})
export class CadastroModule { }

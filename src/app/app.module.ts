import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { appRoute } from './route';
import { FooterComponent } from './components/footer/footer.component';
import { ListaComponent } from './lista/lista.component';
import { GeralService } from './geral.service';
import { AuthGuard } from './guards/auth.guard';
import { UnidadesComponent } from './unidades/unidades.component';
import { CadastroModule } from './cadastro/cadastro.module';
import { VisualizarFichaComponent } from './lista/visualizar-ficha/visualizar-ficha.component';
import { EditarComponent } from './lista/editar/editar.component';
import { VisualizarUnidadeComponent } from './unidades/visualizar-unidade/visualizar-unidade.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ListaComponent,
    VisualizarFichaComponent,
    EditarComponent,
    UnidadesComponent,
    VisualizarUnidadeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    CadastroModule,
  ],
  providers: [GeralService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

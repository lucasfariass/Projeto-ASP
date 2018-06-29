import { Routes } from '@angular/router';
import { HomeComponent } from './../home/home.component';
import { CadastroComponent } from './../cadastro/cadastro.component';
import { ListaComponent } from './../lista/lista.component';
import { AuthGuard } from './../guards/auth.guard';
import { UnidadesComponent } from './../unidades/unidades.component';
import { EditarComponent } from './../lista/editar/editar.component';
import { VisualizarFichaComponent } from './../lista/visualizar-ficha/visualizar-ficha.component';
import { VisualizarUnidadeComponent } from './../unidades/visualizar-unidade/visualizar-unidade.component';

export const appRoute : Routes = [

    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'lista-espera', component: ListaComponent},
    {path: 'editar', component: EditarComponent, canActivate: [AuthGuard]},
    {path: 'visualizar-ficha', component: VisualizarFichaComponent, canActivate: [AuthGuard]},
    {path: 'unidades', component: UnidadesComponent},
    {path: 'visualizar-unidade', component: VisualizarUnidadeComponent, canActivate: [AuthGuard]}
]
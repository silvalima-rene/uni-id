import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarteiraComponent } from './carteira/carteira.component';

const routes: Routes = [
  { path: '', component: LoginComponent },            // Rota padrão (página de login)
  { path: 'dashboard', component: DashboardComponent }, // Rota para o dashboard
  { path: 'carteira', component: CarteiraComponent },   // Rota para a carteira
  { path: '**', redirectTo: '' }                      // Redireciona rotas inválidas para a página de login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configura o roteamento na aplicação com o `forRoot`
  exports: [RouterModule]
})
export class AppRoutingModule { }

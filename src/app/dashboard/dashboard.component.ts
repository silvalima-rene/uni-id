import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isMenuVisible = false;
  nomeUsuario = 'Nome do Usuário'; // Defina o nome do usuário logado aqui

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}

import { Component, OnInit } from '@angular/core';
import { addDays, format } from "date-fns";

@Component({
  selector: 'app-carteira',
  templateUrl: './carteira.component.html',
  styleUrls: ['./carteira.component.scss']
})
export class CarteiraComponent implements OnInit {
  fullName: string = '';
  user: any;
  isMenuVisible: boolean = false;
  dataVencimento: any;

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('loggedUser') || '{}');
    this.dataVencimento = format(addDays(new Date(), 125), 'dd/MM/yyyy');
    // Recupera o nome completo do usuário logado do localStorage
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}

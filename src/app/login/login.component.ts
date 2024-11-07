import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  users = {
    'rene.silva': { password: 'amou2', name: 'Rene Silva Lima', curso: 'Engenharia de Dados', profilePic: 'foto-rene.jpg', cpf: '450.786.408-94', dne: '2063.00G' },
    'thiago.santos': { password: 'amogregmaya', name: 'Thiago Nascimento Santos', curso: 'Sistemas de Informação', profilePic: 'foto-thiago.jpeg', cpf: '450.756.408-94', dne: '2063.00G'  },
    'mari.nogueira': { password: 'amolencinho', name: 'Mariana Felipe Nogueira', curso: 'Engenharia Química', profilePic: 'foto-mari.jpeg', cpf: '470.346.123-54', dne: '2063.00G'  },
    'neres.neres': { password: 'amosax', name: 'Thais Neres', curso: 'Design', profilePic: 'foto-neres.jpeg', cpf: '395.222.105-94', dne: '2063.00G'  }
  };

  constructor(private router: Router) {}

  login() {
    const user = this.users[this.username as keyof typeof this.users];
    if (user && user.password === this.password) {
      // Armazena o nome completo do usuário no localStorage
      localStorage.setItem('loggedUser', JSON.stringify(user));
      this.router.navigate(['/dashboard']);
    } else {
      alert('Usuário ou senha incorretos.');
    }
  }
}

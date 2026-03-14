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
    'thiago.santos': { password: 'amogregmaya', name: 'Thiago Nascimento Santos', curso: 'Sistemas de Informação', profilePic: 'foto-thiago.jpeg', cpf: '475.304.158-16', dne: '2063.00G'  },
    'mari.nogueira': { password: 'amolencinho', name: 'Mariana Felipe Nogueira', curso: 'Engenharia Química', profilePic: 'foto-mari.jpeg', cpf: '311.111.278-08', dne: '2063.00G'  },
    'neres.neres': { password: 'amosax', name: 'Thais Matins Neres de Araújo', curso: 'Design', profilePic: 'foto-neres.jpeg', cpf: '444.930.838-75', dne: '2063.00G'  },
    'gabi.rosch': { password: 'amobjork', name: 'Gabriela Rosch Parraguez', curso: 'Gastronomia', profilePic: 'foto-gabi.jpeg', cpf: '513.011.158-35', dne: '2063.00G'  },
    'henrique.ribeiro': { password: 'amoslipmami', name: 'Henrique dos Santos Ribeiro', curso: 'Rádio e TV', profilePic: 'foto-henrique.jpeg', cpf: '513.011.158-35', dne: '2063.00G'  },
    'leo.machado': { password: 'amomcdavi', name: 'Leonardo Machado Rocha', curso: 'Arquitetura e Urbanismo', profilePic: 'foto-leo.jpeg', cpf: '415.267.818-67', dne: '2063.00G'  },
    'jeff.correa': { password: 'amodjonga', name: 'Jefferson Correa', curso: 'Sistemas de informação', profilePic: 'foto-jeff.JPG', cpf: '392.525.968-60', dne: '2063.00G'  },
    'isa.martini': { password: 'amoarquitetura', name: 'Isabella Martini Ramos', curso: 'Arquitetura e Urbanismo', profilePic: 'foto-isa.jpeg', cpf: '433.182.418-73', dne: '2063.00G'  }
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

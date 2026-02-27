import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { AuthService } from '../auth.service';  
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  message: string = 'Vous êtes déconnecté. (pikachu/pikachu)';
  name: string ;
  password: string ;
  auth: AuthService;

  constructor(
    public authService: AuthService, 
    private router: Router) { }


  ngOnInit() {
      this.auth= this.authService;

  }

  setMessage() {
    if(this.auth.isLoggedIn) {
      this.message = 'Vous êtes connecté.';
    } else {
      this.message = 'Identifiant ou mot de passe incorrect.';
    }
  }

  login() {
    this.message = 'Tentative de connexion en cours...';
    this.auth.login(this.name, this.password).subscribe(() => {
      this.setMessage();
      if(this.auth.isLoggedIn) {
      this.router.navigate(['/pokemons']);
      } else{
        this.password
      this.router.navigate(['/login']);
      }
  })
}

 logout() {    
  this.auth.logout();
  this.setMessage();
  this.message = 'Vous êtes déconnecté.';
}

}

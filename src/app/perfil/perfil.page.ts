import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/features/auth.service';
import { UserInfo } from '../auth/features/auth.service'; // Importa la interfaz

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: false,
})
export class PerfilPage implements OnInit {

  user: UserInfo | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.currentUser$.subscribe((user) => {
      this.user = user;
    });
  }

  logout() {
    this.authService.signOut();
  }

}

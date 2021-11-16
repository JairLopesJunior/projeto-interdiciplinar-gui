import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { BodyStyleComponent } from '../../utils/body-style/body-style.component';
import { UsuarioService } from '../home/usuario.service';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css'],
})
export class PostagemComponent implements OnInit {
  hasLoading = true;

  u: string = 'usuario';

  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.retrieveAll();
  }

  retrieveAll(): void {
    BodyStyleComponent.definirOpacity('0.5');
    this.usuarioService.retriveAll().subscribe({
      next: (usuarios) => {
        this.usuarios = usuarios;
        BodyStyleComponent.definirOpacity('1');
        this.hasLoading = false;
      },
      error: (err) => {
        alert('Error: ' + err);
        BodyStyleComponent.definirOpacity('1');
        this.hasLoading = false;
      },
    });
  }
}

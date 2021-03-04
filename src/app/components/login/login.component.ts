import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output()
  login:EventEmitter<boolean> = new EventEmitter<boolean>();

  public email: string = '';
  public password: string = '';

  constructor(
    private _usuariosService: UsuariosService,
    private _router:Router
  ) { }

  ngOnInit(): void {
  }

  loginCLick() {
    this._usuariosService.LoginService(environment.users, {
      "transaccion": "autenticarUsuario",
      "datosUsuario": {
        "email": this.email,
        "password": this.password
      }
    }).subscribe((response: any) => {
      if (response.mensajeRetorno === 'consulta correcta') {
        localStorage.setItem('token', response.token)
        this.login.emit(true);
        this._router.navigate(['/home']);
      }

    })
  }

}

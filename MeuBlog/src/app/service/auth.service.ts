import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Userlogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  logar(userLogin: Userlogin){
    return this.http.post('http://localhost:9000/usuarios/logar', userLogin)
  }
  cadastrar(user:User){
    return this.http.post('http://localhost:9000/usuarios/cadastrar', user)
  }
  btnSair(){
    let ok = false
    let token = localStorage.getItem('token')

    if(token != null){
      ok = true
    }
    return ok
  }
  btnLogin(){
    let ok = false
    let token = localStorage.getItem('token')

    if(token == null){
      ok = true
    }
    return ok
  }
}

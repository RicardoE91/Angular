import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UsuarioService {
  constructor(private http: HttpClient) {}
  getUsuarios() {
    return this.http.get("https://randomuser.me/api/?results=100");
  }
}
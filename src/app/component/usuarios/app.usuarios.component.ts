import { Component } from "@angular/core";
import { UsuarioService } from "../../services/usuarios/usuarios.service";

@Component({
  selector: "app-usuarios",
  templateUrl: "./app.usuarios.component.html",
  styleUrls: ["./app.usuarios.component.css"]
})
export class UsuariosComponent {
  public usuarios: any = [];
  constructor(private _UsuarioService: UsuarioService) {}

  ngOnInit() {
    this._UsuarioService.getUsuarios().subscribe(
      data => {
        this.usuarios = data["results"];
        console.log(data);
        console.log("UserComponent: ", this.usuarios);
      },
      error => {
        console.log(error);
      }
    );
  }
}
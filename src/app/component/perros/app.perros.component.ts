import { Component } from "@angular/core";
import { Perros } from './perros';

@Component({
  selector: "app-perros",
  templateUrl: "./app.perros.component.html",
  styleUrls: ["./app.perros.component.css"]
})
export class PerrosComponent {
  public perro:Perros;
  constructor(){
    this.perro = new Perros("","","","","");
  }
  onSubmit(){
    console.log("Perro: ", this.perro);
  }
}
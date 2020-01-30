import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-hijo",
  templateUrl: "./app.hijo.component.html",
  styleUrls: ["./app.hijo.component.css"]
})
export class HijoComponent {
  @Input() nombre: string;
  @Input() ciudad: string;

  @Output() envio = new EventEmitter();

  /* constructor(){
    this.nombre = "Ricardo Elizalde";
    this.ciudad = "CDMX";
  } */

  enviar(event){
    console.log("En la Funcion Enviar");
    this.envio.emit({planeta: "Tierra"});
  }
}
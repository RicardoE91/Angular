import { Component } from "@angular/core";

@Component({
  selector: "app-padre",
  templateUrl: "./app.padre.component.html",
  styleUrls: ["./app.padre.component.css"]
})
export class PadreComponent {
  public envio;
  recibirDatos(event){
    console.log("Evento: ", event.planeta);
    this.envio=event;

  }
  
}
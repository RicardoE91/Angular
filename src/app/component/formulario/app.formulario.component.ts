import { Component } from "@angular/core";

@Component({
  selector: "app-formulario",
  templateUrl: "./app.formulario.component.html",
  styleUrls: ["./app.formulario.component.css"]
})
export class FormularioComponent {
   /*  sum: number;
    res: number;
    mul: number;
    div: number; */
    sum2: number;
    res2: number;
    mul2: number;
    div2: number;

    /* calculate(first: number, second: number){
        this.sum = +first + +second;
        this.res = +first - +second;
        this.mul = +first * +second;
        this.div = +first / +second;
    } */

    suma(first: number, second: number){this.sum2 = +first + +second;}
    resta(first: number, second: number){this.res2 = +first - +second;}
    multiplicacion(first: number, second: number){this.mul2 = +first * +second;}
    division(first: number, second: number){this.div2 = +first / +second;}
  
}
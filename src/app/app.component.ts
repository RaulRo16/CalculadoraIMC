import {Component, Input} from '@angular/core';
import {Historial} from "./Historial";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HISTORIAL} from "./mock-historial";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Calculadora IMC';
  public borrar: boolean = false;
  public nombreInput: string = '';
  public newAltura: number = 0;
  public newPeso: number = 0;
  public calculado: number = 0;
  public mensejeGeneradoImc: string = '';
  public imcForm: FormGroup = new FormGroup({
    nombreInput: new FormControl([
      Validators.required
    ]),
  });
  public click: boolean = false;
  public sexoSeleccionado: string = 'Masculino';
  public tipoSexo = [
    'Masculino',
    'Femenino'
  ];

  public historial: Historial[] = [];

  ngOnInit() {
    if (this.borrar) {
      this.resetVariables();
    }
  }

  public onAlturaCreated(newAltura: number) {
    this.newAltura = newAltura;
  }

  public onPesoCreated(newPeso: number) {
    this.newPeso = newPeso;
  }

  private calculoIMC(): void {
    this.newAltura = this.newAltura / 100;
    this.newAltura *= this.newAltura;
    this.calculado = this.newPeso / (this.newAltura);
    this.calculado = parseFloat(parseFloat(this.calculado + '').toFixed(2));

    this.mensejeGeneradoImc = this.nombreInput + ', su indice de masa corporal es de: ' + this.calculado + '. ';

    if (this.calculado < 18.50) {
      this.mensejeGeneradoImc += 'Tiene un peso bajo';
    } else if (this.calculado >= 18.50 && this.calculado <= 24.99) {
      this.mensejeGeneradoImc += 'Tiene un peso normal';
    } else if (this.calculado >= 25 && this.calculado <= 29.99) {
      this.mensejeGeneradoImc += 'Tiene Sobrepeso';
    } else if (this.calculado >= 30 && this.calculado <= 34.99) {
      this.mensejeGeneradoImc += 'Tiene Obesidad de grado 1';
    } else if (this.calculado >= 35 && this.calculado <= 39.99) {
      this.mensejeGeneradoImc += 'Tiene Obesidad de grado 2';
    } else {
      this.mensejeGeneradoImc += 'Tiene Obesidad de grado 3';
    }
  }

  public calculoImcClick(): void {
    this.calculoIMC();
    this.onHistorialCreated();
    this.click = true;
  }

  public onHistorialCreated() {
    console.log('Este el texto del mensaje: ' + this.mensejeGeneradoImc);
    HISTORIAL.push({
      id: Math.floor(Math.random() * 100),
      nombre: this.nombreInput,
      altura: this.newAltura,
      mensaje: this.mensejeGeneradoImc,
      peso: this.newPeso,
      sexo: this.sexoSeleccionado
    });
  }

  public resetVariables(): void {
    this.nombreInput = '';
    this.calculado = 0;
    this.mensejeGeneradoImc = '';
    this.click = false;
  }
}

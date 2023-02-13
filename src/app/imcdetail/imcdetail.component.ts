import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-imcdetail',
  templateUrl: './imcdetail.component.html',
  styleUrls: ['./imcdetail.component.scss']
})
export class IMCDetailComponent {

  @Output() alturaCreated: EventEmitter<number> = new EventEmitter();
  @Output() pesoCreated: EventEmitter<number> = new EventEmitter();
  @Output() borrar: EventEmitter<number> = new EventEmitter();
  @Output() sendClick: EventEmitter<boolean> = new EventEmitter();
  public numeroAltura: number = 0;
  public numeroPeso: number = 0;
  public click: boolean = false;

  public sumarAltura(numero: number): void {
    this.numeroAltura = (this.numeroAltura >= 0) ? this.numeroAltura + numero : 0;
    this.alturaCreated.emit(this.numeroAltura);
  }

  public restarAltura(numero: number): void {
    this.numeroAltura = (this.numeroAltura > 0) ? this.numeroAltura - numero : 0;
    this.alturaCreated.emit(this.numeroAltura);
  }

  public sumarPeso(numero: number): void {
    this.numeroPeso = (this.numeroPeso >= 0) ? this.numeroPeso + numero : 0;
    this.pesoCreated.emit(this.numeroPeso);
  }

  public restarPeso(numero: number): void {
    this.numeroPeso = (this.numeroPeso > 0) ? this.numeroPeso - numero : 0;
    this.pesoCreated.emit(this.numeroPeso);
  }

  public VariablesaCero(): void {
    this.numeroAltura = 0;
    this.numeroPeso = 0;
    this.click = true
    this.borrar.emit(this.numeroAltura);
    this.borrar.emit(this.numeroPeso);
    this.sendClick.emit(this.click)
  }
}

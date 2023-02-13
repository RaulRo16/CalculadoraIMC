import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Historial} from "./Historial";
import {HISTORIAL} from "./mock-historial";

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  /*El servicio se encarga de enviarle al controler la información*/
  constructor() { }

  public getHistorial(): Observable<Historial[]>{
    return of(HISTORIAL);
  }
}

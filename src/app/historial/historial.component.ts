import {Component, OnInit} from '@angular/core';
import {tap} from "rxjs";
import {Historial} from "../Historial";
import {HistorialService} from "../historial.service";

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {
  public historial: Historial[] = [];

  constructor(private historialService: HistorialService) {
  }

  ngOnInit(): void {
    this.loadHistorial();
  }

  loadHistorial(): void {
    this.historialService.getHistorial()
      .pipe(
        tap((historialListado: Historial[]) => {
          console.log(historialListado);
        }),
      ).subscribe((historialListado: Historial[]) => {
        this.historial = historialListado;
      });
  }
}

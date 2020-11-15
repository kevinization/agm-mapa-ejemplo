import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Cosas que suelen tener los mapas:
  lat: number;
  lng: number;
  zoom: number;
  mapTypeId: string;
  // Para que no salga el marcador al principio
  located: boolean;

  constructor(){
    this.lat = 24.0277;
    this.lng = -104.653;
    this.zoom = 6;
    this.mapTypeId = 'hybrid';
    // located se pone en false al principio para que no salga al cargar la página
    this.located = false;

  }

  // tslint:disable-next-line: typedef
  obtenerPosicionActual(){
    // Obtener posición actual
    navigator.geolocation.getCurrentPosition(position => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
      this.zoom = 17;
      // located se pone en true al presionar el botón para obtener la posición actual para que el marcador aparezca
      this.located = true;
    });
  }
}

import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


lat = 24.0277;
lng = -104.653;
zoom = 6;
mapTypeId = 'roadmap';
located = false;

  markers: marker[] = [];

  // tslint:disable-next-line: typedef
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  // tslint:disable-next-line: typedef
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  // tslint:disable-next-line: typedef
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
    console.log('la latitud es: ' + $event.coords.lat);
    console.log('la longitud es: ' + $event.coords.lng);

    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
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
    // tslint:disable-next-line: typedef
    coordsFinales(){
      console.log('LATITUD FINAL: ' + this.lat);
      console.log('LONGITUD FINAL: ' + this.lng);
    }
}
// tslint:disable-next-line: class-name
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}


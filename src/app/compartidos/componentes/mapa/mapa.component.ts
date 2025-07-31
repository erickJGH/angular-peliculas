import { Component } from '@angular/core';
import { icon, latLng, LeafletMouseEvent, marker, Marker, MarkerOptions, tileLayer } from 'leaflet';
import {LeafletModule} from '@bluehalo/ngx-leaflet'

@Component({
  selector: 'app-mapa',
  imports: [LeafletModule],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent {

  markerOptions: MarkerOptions = {
    icon: icon({
      iconSize:[25,41],
      iconAnchor: [13,41],
      iconUrl: 'assets/marker-icon.png',
      iconRetinaUrl: 'assets/marker-icon-2x.png',
      shadowUrl: 'assets/marker-shadow.png'
    })
  }


  // markerOptions: MarkerOptions = {
  //   icon: icon({
  //     iconSize:[25,41],
  //     iconAnchor: [13,41],
  //     iconUrl: 'assets/market-icon.png',
  //     iconRetinaUrl: 'assets/market-icon-2x.png',
  //     shadowUrl: 'assets/market-shadow.png'
  //   })
  // }

options = {
  layers: [
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    maxZoom: 18,
    attribution: '...'
    })
  ],
  zoom: 14,
  center: latLng(19.28996410846533,-70.26237291041258)
}

capas: Marker<any>[]=[];

manejarClick(event: LeafletMouseEvent){
  const latitud  = event.latlng.lat;
  const longitud = event.latlng.lng;

  this.capas = [];
  this.capas.push(marker([latitud,longitud],this.markerOptions));
}

}

import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CineCreacionDTO } from '../cines';
import { FormularioCinesComponent } from "../formulario-cines/formulario-cines.component";

@Component({
  selector: 'app-crear-cine',
  imports: [MatButtonModule, FormularioCinesComponent],
  templateUrl: './crear-cine.component.html',
  styleUrl: './crear-cine.component.css'
})
export class CrearCineComponent {
  

   guardarCambios(cine: CineCreacionDTO){
      console.log('creando cine',cine);
   }
}

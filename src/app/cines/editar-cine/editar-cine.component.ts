import { Component, Input, numberAttribute } from '@angular/core';
import { CineCreacionDTO, CineDTO } from '../cines';
import { FormularioCinesComponent } from '../formulario-cines/formulario-cines.component';

@Component({
  selector: 'app-editar-cine',
  imports: [FormularioCinesComponent],
  templateUrl: './editar-cine.component.html',
  styleUrl: './editar-cine.component.css'
})
export class EditarCineComponent {
  @Input({transform: numberAttribute})
  id!: number;

  cine: CineDTO = {
    id: 1, 
    nombre: 'caribean cinema Palmares',
    latitud:19.28737215545671,
    longitud: -70.26965702464986 
  }

  guardarCambios(cine: CineCreacionDTO){
    console.log('editar cine', cine);
  }
}

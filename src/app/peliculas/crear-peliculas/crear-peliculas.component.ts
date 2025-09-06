import { Component } from '@angular/core';
import { peliculaCreacionDTO } from '../peliculas';
import { FormularioPeliculasComponent } from '../formulario-peliculas/formulario-peliculas.component';
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultipleModelo';
import { actorAutocompleteDTO } from '../../actores/actores';

@Component({
  selector: 'app-crear-peliculas',
  imports: [FormularioPeliculasComponent],
  templateUrl: './crear-peliculas.component.html',
  styleUrl: './crear-peliculas.component.css'
})
export class CrearPeliculasComponent {

  generosSeleccionados: SelectorMultipleDTO[]= [];

  generosNoSeleccionados: SelectorMultipleDTO[]= [ 
    {llave: 1, valor: 'Drama'},
    {llave: 2, valor: 'Accion'},
    {llave: 3, valor: 'Comedia'}
  ];

  cinesSeleccionados: SelectorMultipleDTO[]= [];

  cinesNoSeleccionados: SelectorMultipleDTO[]= [ 
    {llave: 1, valor: 'Caribean cinema'},
    {llave: 2, valor: 'cineMax '},
    {llave: 3, valor: 'El palacio del cine'}
  ];

  actoresSeleccionados: actorAutocompleteDTO[] = [];

  guardarCambios(pelicula: peliculaCreacionDTO){
    console.log('creando pelicula', pelicula);
  }

}

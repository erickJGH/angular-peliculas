import { Component, Input, numberAttribute } from '@angular/core';
import { peliculaCreacionDTO, peliculaDTO } from '../peliculas';
import { FormularioActoresComponent } from "../../actores/formulario-actores/formulario-actores.component";
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultipleModelo';
import { actorAutocompleteDTO } from '../../actores/actores';

@Component({
  selector: 'app-editar-pelicula',
  imports: [FormularioActoresComponent, FormularioPeliculasComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent {
  @Input({transform: numberAttribute})
  id!: number;

  generosSeleccionados: SelectorMultipleDTO[]= [
    {llave: 2, valor: 'Accion'},
  ];

  generosNoSeleccionados: SelectorMultipleDTO[]= [ 
    {llave: 1, valor: 'Drama'},
    
    {llave: 3, valor: 'Comedia'}
  ];

  cinesSeleccionados: SelectorMultipleDTO[]= [
    {llave: 2, valor: 'cineMax '}
  ];

  cinesNoSeleccionados: SelectorMultipleDTO[]= [ 
    {llave: 1, valor: 'Caribean cinema'},
    
    {llave: 3, valor: 'El palacio del cine'}
  ];

  pelicula: peliculaDTO = {id: 1,titulo:'Spider-Man',trailer: 'ABC',fechaLanzamiento: new Date ('2018-07-25'), poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Spider_Man_No_Way_Home_Logo.svg/250px-Spider_Man_No_Way_Home_Logo.svg.png' }


  actoresSeleccionados: actorAutocompleteDTO[] = [
    {
      id: 1, nombre: 'Tom holland', personaje: 'peter parker',foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Tom_Holland_during_pro-am_Wentworth_golf_club_2023-2.jpg/250px-Tom_Holland_during_pro-am_Wentworth_golf_club_2023-2.jpg'
    }
  ]
  
  guardarCambios(pelicula : peliculaCreacionDTO){
    console.log('editando pelicula', pelicula);
  }
}

import { Component, Input, numberAttribute } from '@angular/core';
import { peliculaCreacionDTO, peliculaDTO } from '../peliculas';
import { FormularioActoresComponent } from "../../actores/formulario-actores/formulario-actores.component";
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";

@Component({
  selector: 'app-editar-pelicula',
  imports: [FormularioActoresComponent, FormularioPeliculasComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent {
  @Input({transform: numberAttribute})
  id!: number;


  pelicula: peliculaDTO = {id: 1,titulo:'Spider-Man',trailer: 'ABC',fechaLanzamiento: new Date ('2018-07-25'), poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Spider_Man_No_Way_Home_Logo.svg/250px-Spider_Man_No_Way_Home_Logo.svg.png' }

  guardarCambios(pelicula : peliculaCreacionDTO){
    console.log('editando pelicula', pelicula);
  }
}

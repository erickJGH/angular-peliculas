import { Component } from '@angular/core';
import { peliculaCreacionDTO } from '../peliculas';
import { FormularioPeliculasComponent } from '../formulario-peliculas/formulario-peliculas.component';

@Component({
  selector: 'app-crear-peliculas',
  imports: [FormularioPeliculasComponent],
  templateUrl: './crear-peliculas.component.html',
  styleUrl: './crear-peliculas.component.css'
})
export class CrearPeliculasComponent {

  guardarCambios(pelicula: peliculaCreacionDTO){
    console.log('creando pelicula', pelicula);
  }

}

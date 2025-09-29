import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
MatInputModule
import { Router, RouterLink } from '@angular/router';
import { primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';
import { FormularioGeneroComponent } from '../formulario-genero/formulario-genero.component';
import { GeneroCreacionDTO } from '../generos';
import { GenerosService } from '../generos.service';


@Component({
  selector: 'app-crear-generos',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormularioGeneroComponent],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {


  private router = inject(Router);
  private generosService = inject(GenerosService);
  guardarCambios(genero: GeneroCreacionDTO) {
    
    this.generosService.crear(genero).subscribe(() => {
      this.router.navigate(['/generos']);
    })
  }
}

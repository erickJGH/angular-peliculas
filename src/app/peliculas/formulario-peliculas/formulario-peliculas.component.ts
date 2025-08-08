import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { InputImgComponent } from '../../compartidos/componentes/input-img/input-img.component';
import { peliculaCreacionDTO, peliculaDTO } from '../peliculas';

@Component({
  selector: 'app-formulario-peliculas',
  imports: [MatFormFieldModule,ReactiveFormsModule,MatInputModule,MatButtonModule,RouterLink,MatDatepickerModule,InputImgComponent],
  templateUrl: './formulario-peliculas.component.html',
  styleUrl: './formulario-peliculas.component.css'
})
export class FormularioPeliculasComponent {


  @Input()
  modelo?:peliculaDTO;

  @Output()
  posteoFormulario = new EventEmitter<peliculaCreacionDTO>();

  private formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    titulo: ['',{validators: [Validators.required]}],
    fechaLanzamiento: new FormControl<Date | null>(null, {validators: [Validators.required]}),
    trailer: '',
    poster: new FormControl <File | string | null>(null)
  });

  archivoSeleccionado(file: File){
    this.form.controls.poster.setValue(file);
  }
}

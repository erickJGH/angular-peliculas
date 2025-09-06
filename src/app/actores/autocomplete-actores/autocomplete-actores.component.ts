import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import { MatTable, MatTableModule } from '@angular/material/table';
import { actorAutocompleteDTO } from '../actores';
import {CdkDragDrop, DragDropModule, moveItemInArray} from '@angular/cdk/drag-drop'
@Component({
  selector: 'app-autocomplete-actores',
  imports: [MatAutocompleteModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, FormsModule, MatTableModule, MatInputModule,
    DragDropModule
  ],
  templateUrl: './autocomplete-actores.component.html',
  styleUrl: './autocomplete-actores.component.css'
})
export class AutocompleteActoresComponent {

  control = new FormControl();

  actores: actorAutocompleteDTO[] = [
    {
      id: 1, nombre: 'Tom holland', personaje: '',foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Tom_Holland_during_pro-am_Wentworth_golf_club_2023-2.jpg/250px-Tom_Holland_during_pro-am_Wentworth_golf_club_2023-2.jpg'
    },
    {
      id: 2, nombre: 'Tom cruised', personaje: '',foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Tom_Cruise-2428.jpg/250px-Tom_Cruise-2428.jpg'
    },
    {
      id: 3, nombre: 'Will smith', personaje: '',foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/TechCrunch_Disrupt_San_Francisco_2019_-_Day_1_%2848834070763%29_%28cropped%29.jpg/250px-TechCrunch_Disrupt_San_Francisco_2019_-_Day_1_%2848834070763%29_%28cropped%29.jpg'
    },

  ]

  @Input({required: true})
  actoresSeleccionados: actorAutocompleteDTO[]= [];

  @ViewChild(MatTable) table!: MatTable<actorAutocompleteDTO>;

  columnasAmostrar = ['imagen','nombre','personaje','acciones'];

  actorSeleccionado(event: MatAutocompleteSelectedEvent ){
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('');

    if(this.table != undefined){
      this.table.renderRows();
    }
  }

  finalizarArrastre(event: CdkDragDrop<any[]>){
    const indicePrevio = this.actoresSeleccionados.findIndex(actor => actor === event.item.data);
    moveItemInArray(this.actoresSeleccionados,indicePrevio,event.currentIndex);
    this.table.renderRows();
  }

  eliminar(actor: actorAutocompleteDTO){
    const indice = this.actoresSeleccionados.findIndex((a: actorAutocompleteDTO) => a.id === actor.id);
    this.actoresSeleccionados.splice(indice,1);
    this.table.renderRows();
  }

}

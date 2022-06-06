import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroeB: string = '';

  heroes: string[] = ['Batman', 'Superman', 'Flash', 'Aquaman', 'Capi'];

  borrarHeroe() {
    this.heroeB = this.heroes.shift() || '';
  }
}

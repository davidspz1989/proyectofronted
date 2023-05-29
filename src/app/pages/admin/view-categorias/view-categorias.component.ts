import { Component } from '@angular/core';

@Component({
  selector: 'app-view-categorias',
  templateUrl: './view-categorias.component.html',
  styleUrls: ['./view-categorias.component.css']
})
export class ViewCategoriasComponent {

  categorias=[
    {
      categoriaId:1,
      titulo:"Lenguaje de progrmacion",
      descripcion:"Esta es una categoria de prueba"
    },
    {
      categoriaId:1,
      titulo:"Lenguaje de progrmacion",
      descripcion:"Esta es una categoria de prueba"
    },
    {
      categoriaId:1,
      titulo:"Lenguaje de progrmacion",
      descripcion:"Esta es una categoria de prueba"
    },
    {
      categoriaId:1,
      titulo:"Lenguaje de progrmacion",
      descripcion:"Esta es una categoria de prueba"
    }
  ]

}

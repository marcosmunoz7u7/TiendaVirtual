import { Component, OnInit, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ProductosService } from '../productos.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { Productos } from '../interfaces/producto';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CardComponent, JsonPipe, CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent implements OnInit{
  private readonly productosSvc = inject(ProductosService)
  productos: Productos[]=[];
  ngOnInit(): void {
    this.productosSvc.getAllProductos().subscribe((res:Productos[])=>{
      this.productos = res
    });

  }

}

import { Component, OnInit, inject } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ProductosService } from '../productos.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { Productos } from '../interfaces/producto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CardComponent, JsonPipe, CommonModule, FormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent implements OnInit{
  private readonly productosSvc = inject(ProductosService)
  productos: Productos[] = [];
  filteredData!: Productos[]| null;
  searchData:string ='';
  loader:boolean =false
  ngOnInit(): void {
    this.productosSvc.getAllProductos().subscribe((res:Productos[])=>{
      this.productos = res
    });

  }
  getFileteredProducts(){
    this.filteredData = this.productos.filter((productos: Productos)=>{

      return productos.title.includes(this.searchData)

    })
  }

}

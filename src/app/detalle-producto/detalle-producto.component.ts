import { CommonModule, CurrencyPipe, JsonPipe, SlicePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Productos } from '../interfaces/producto';
import { ProductosService } from '../productos.service';


@Component({
  selector: 'app-detalle-producto',
  standalone: true,
  imports: [RouterLink, JsonPipe, CommonModule, SlicePipe, CurrencyPipe],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.scss'
})
export class DetalleProductoComponent {
  activePath:string=''
  dataDetail! : Productos
  constructor(private active:ActivatedRoute, private productoService: ProductosService){
    active.params.subscribe((res:any)=>{this.activePath =res.id})
  }
  ngOnInit(){
    this.productoService.getIndividualProduct(this.activePath).subscribe( (res:Productos)=>{ this.dataDetail= res})
  }
  @Input() product?: Productos | undefined
}

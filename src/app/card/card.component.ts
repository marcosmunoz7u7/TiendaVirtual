import { Component, Input, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Productos } from '../interfaces/producto';
import { CommonModule, CurrencyPipe, SlicePipe } from '@angular/common';
import { DetalleProductoComponent } from '../detalle-producto/detalle-producto.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterOutlet, SlicePipe, CurrencyPipe, DetalleProductoComponent, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  private _router = inject(Router)
  @Input() producto?: Productos;



  verMas(id?: number)
  {
    this._router.navigate(["/productos", id]);
  }
}

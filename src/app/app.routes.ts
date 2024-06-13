import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { DetalleProductoComponent } from './productos/detalle-producto/detalle-producto.component';

export const routes: Routes = [

  {path: "",component: HomeComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'productos/:id', component: DetalleProductoComponent},
];

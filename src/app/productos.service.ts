import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProducsArray, Productos } from './interfaces/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private readonly _http= inject(HttpClient);
  getAllProductos(): Observable<any> {
    return this. _http.get('https://fakestoreapi.com/products');
  }
  urlBase = "https://fakestoreapi.com/products"
  getIndividualProduct(id: string): Observable<Productos>{
    return this._http.get<Productos>(`${this.urlBase}/${id}`)/* /productos?linkTo=id_producto&equalTo= */
  }
  constructor() { }
}

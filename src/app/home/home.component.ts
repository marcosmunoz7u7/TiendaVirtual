import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from '../interfaces/producto';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{
  title = 'Hola!';
  card= {
    marca: 'toyota',
    modelo: 'yaris',
    year: '2022'
  }
  _products:Products= {
    id: 0,
    name: '',
    money:{
      price: 0,
      tax: 0,
      cost: 0,
    },
    category: 0,
    description: '',
    price: 0
  }

}

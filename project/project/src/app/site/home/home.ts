import { Component } from '@angular/core';
import { Menu } from '../menu/menu';
import { Navigationbar } from '../navigationbar/navigationbar';
import { Products } from '../products/products';

@Component({
  imports: [Menu, Navigationbar, Products],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}

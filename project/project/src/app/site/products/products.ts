import { Component } from '@angular/core';
import{ CATALOGUE } from '../shared/mock-data/catalogue-produits';
import { Produit } from '../shared/models/produit';

@Component({
  imports: [],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {
onclick(prod: Produit) {
    this.selectedDescription = prod.description;
    alert(`Description du produit ${prod.nom} : ${prod.description}`);
}
  title = 'Products';
  produit = CATALOGUE;
  selectedDescription: string = '';}

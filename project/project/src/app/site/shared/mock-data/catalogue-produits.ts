import { Produit } from '../models/produit' ;
export const CATALOGUE : Produit[] = [
new Produit( {nom: 'Prod1', prix :150, categId : 'C1' , description: 'Description for Prod1', image: 'images/prod1.png'}),
new Produit( {nom: 'Prod2', prix :40, categId : 'C1',image: 'images/prod2.png'}),
new Produit( {nom: 'Prod3', prix :54, categId : 'C2', description: 'Description for Prod3', image: 'images/prod3.png'}),
];
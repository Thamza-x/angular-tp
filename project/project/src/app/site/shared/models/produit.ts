export class Produit {
id: string;
nom: string;
image: string; 
prix: number;
description: string;
categId: string;
constructor(args: Partial<Produit> = {}) {
this.id = args.id ?? '';
this.nom = args.nom ?? 'Produit';
this.image = args.image ?? 'default.png';
this.prix = args.prix ?? 0;
this.description = args.description ?? '';
this.categId = args.categId ?? '';
}
}
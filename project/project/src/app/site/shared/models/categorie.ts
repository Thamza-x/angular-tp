export class Categorie {
    id: string;
nom: string;
constructor(args: Partial<Categorie> = {}) {
this.id = args.id ?? '';
this.nom = args.nom ?? 'Categorie';
}}

export class Client {
    id: string;
    nom: string;
    email: string;
    avatar: string;
    constructor(args: Partial<Client> = {}) {
        this.id = args.id ?? '';
        this.nom = args.nom ?? 'Client';
        this.email = args.email ?? '';
        this.avatar = args.avatar ?? 'default.png';
    }
}

import { Tema } from './Tema';

export class Postagem{
    public id: number;
    public titulo: string;
    public nome: string;
    public texto: string;
    public data: Date;
    public tema: Tema;

}
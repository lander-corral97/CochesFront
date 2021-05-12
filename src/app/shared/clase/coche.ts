import { Marca } from "./marca";

export class Coche {
    public id: number;
    public modelo: string;
    public matricula: string;
    public marca: Marca;
    
    constructor (id: number, modelo: string, matricula: string, marca: Marca) {
        this.id = id;
        this.modelo = modelo;
        this.matricula = matricula;
        this.marca = marca;
    }
}

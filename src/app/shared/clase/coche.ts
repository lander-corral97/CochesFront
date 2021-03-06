import { Marca } from "./marca";

export class Coche {
    public id: number
    public marca: Marca;
    public matricula: string;
    public modelo: string;
    
    constructor (id: number, modelo: string, matricula: string, marca: Marca) {
        this.id = id;
        this.modelo = modelo;
        this.matricula = matricula;
        this.marca = marca;
    }
}

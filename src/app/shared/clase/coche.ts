import { Marca } from "./marca";

export class Coche {
    public modelo: string;
    public matricula: string;
    public marca: number;
    
    constructor (modelo: string, matricula: string, marca: number) {
        this.modelo = modelo;
        this.matricula = matricula;
        this.marca = marca;
    }
}

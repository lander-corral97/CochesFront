import { Coche } from "./coche";

export class Marca {
    public id: number;
    public nombre: string;
    public coches: Coche[];

    constructor (id: number, nombre: string) {
        this.id = id;
        this.nombre = nombre;
        this.coches = [];
    }

}

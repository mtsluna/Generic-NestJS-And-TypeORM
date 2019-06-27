import { Entity, Column, TableInheritance, ManyToMany, JoinTable } from "typeorm";
import { Base } from "./base";
import { Persona } from "./persona";

@Entity()
@TableInheritance({column: {type: "varchar", name: "type"}})
export class Comprobante extends Base{

    @Column()
    protected numero:number;
    @Column()
    protected fecha:string;
    @ManyToMany(type => Persona, {cascade: true, eager: true})
    @JoinTable()
    private personas: Persona[];

    getNumero() : number {
        return this.numero;
    }

    setNumero(value:number){
        this.numero = value;
    }

    getFecha() : string {
        return this.fecha;
    }

    setFecha(value:string){
        this.fecha = value;
    }

    getPersonas() : Persona[]{
        return this.personas;
    }

    setPersonas(value:Persona[]){
        this.personas = value;
    }

}
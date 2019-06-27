import { Entity, ChildEntity, Column } from "typeorm";
import { Persona } from "./persona";

@ChildEntity()
export class Vendedor extends Persona{

    @Column()
    private sector:string;

    getSector(){
        return this.sector;
    }

    setSector(value:string){
        this.sector = value;
    }

}
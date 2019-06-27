import { ChildEntity, Column } from "typeorm";
import { Persona } from "./persona";

@ChildEntity()
export class Cliente extends Persona{

    @Column()
    private telefono:number;

    getTelefono(){
        return this.telefono;
    }

    setTelefono(value:number){
        this.telefono = value;
    }

}
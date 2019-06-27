import { Entity, TableInheritance, Column } from "typeorm";
import { Base } from "./base";

@Entity()
@TableInheritance({column: {type: "varchar", name: "type"}})
export class Persona extends Base{

    @Column()
    protected nombre:string;
    @Column()
    protected apellido:string;
    @Column()
    protected documento:string;
    @Column()
    protected direccion:string;

    getNombre() : string {
        return this.nombre;
    }

    setNombre(value:string){
        this.nombre = value;
    }

    getApellido() : string {
        return this.apellido;
    }

    setApellido(value:string){
        this.apellido = value;
    }

    getDocumento() : string {
        return this.documento;
    }

    setDocumento(value:string){
        this.documento = value;
    }

    getDireccion() : string {
        return this.direccion;
    }

    setDireccion(value:string){
        this.direccion = value;
    }

}
import { Entity, Column } from "typeorm";
import { Base } from "./base";

@Entity()
export class Producto extends Base{

    @Column()
    private nombreProducto:string;
    @Column()
    private precioUnitario:number;

    getNombreProducto() : string{
        return this.nombreProducto;
    }

    setNombreProducto(value:string){
        this.nombreProducto = value;
    }

    getPrecioUnitario() : number{
        return this.precioUnitario;
    }

    setPrecioProducto(value:number){
        this.precioUnitario = value;
    }

}
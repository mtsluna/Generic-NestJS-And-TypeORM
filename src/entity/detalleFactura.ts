import { Entity, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Base } from "./base";
import { Factura } from "./factura";
import { Producto } from "./producto";

@Entity()
export class DetalleFactura extends Base{

    @Column()
    private cantidad:number;
    @ManyToOne(type => Factura, Factura => Factura.detalles)
    factura:Factura;
    @ManyToOne(type => Producto, {cascade: true, eager: true})
    private producto:Producto;

    getCantidad() : number{
        return this.cantidad
    }

    setCantidad(value:number){
        this.cantidad = value;
    }

    getFactura() : Factura{
        return this.factura;
    }

    setFactura(value:Factura){
        this.factura = value;
    }

    getProducto() : Producto{
        return this.producto;
    }

    setProducto(value:Producto){
        this.producto = value;
    }

}
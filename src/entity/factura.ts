import { Comprobante } from "./comprobante";
import { ChildEntity, Column, OneToMany, JoinColumn } from "typeorm";
import { DetalleFactura } from "./detalleFactura";

@ChildEntity()
export class Factura extends Comprobante{

    @Column()
    private tipoFactura:string;
    @OneToMany(type => DetalleFactura, DetalleFactura => DetalleFactura.factura, {cascade: true, eager: true})
    detalles:DetalleFactura[];

    getTipoFactura() : string {
        return this.tipoFactura;
    }

    setTipoFactura(value:string){
        this.tipoFactura = value;
    }

    getDetalles() : DetalleFactura[]{
        return this.detalles;
    }

    setDetalles(value:DetalleFactura[]){
        this.detalles = value;
    }
    
}

import { Repository, EntityRepository } from "typeorm";
import { DetalleFactura } from "../entity/detalleFactura";

@EntityRepository(DetalleFactura)
export class DetalleFacturaRepository extends Repository<DetalleFactura>{

}
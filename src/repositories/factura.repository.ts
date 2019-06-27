import { Repository, EntityRepository } from "typeorm";
import { Factura } from "../entity/factura";

@EntityRepository(Factura)
export class FacturaRepository extends Repository<Factura>{

}
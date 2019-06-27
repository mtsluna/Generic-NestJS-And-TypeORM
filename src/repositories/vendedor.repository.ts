import { Repository, EntityRepository } from "typeorm";
import { Vendedor } from "../entity/vendedor";

@EntityRepository(Vendedor)
export class VendedorRepository extends Repository<Vendedor>{

}
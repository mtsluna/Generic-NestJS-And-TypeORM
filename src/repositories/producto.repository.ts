import { Repository, EntityRepository } from "typeorm";
import { Producto } from "../entity/producto";

@EntityRepository(Producto)
export class ProductoRepository extends Repository<Producto>{

}
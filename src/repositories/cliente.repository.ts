import { Cliente } from "../entity/cliente";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Cliente)
export class ClienteRepository extends Repository<Cliente>{

}
import { Planet } from "../entity/planet";
import { EntityRepository, Repository } from "typeorm";

//Declara al repositorio con tipo Planeta
@EntityRepository(Planet)
//Declaracion de clase, extiende de Repositorio Generico
export class PlanetRepository extends Repository<Planet>{

}
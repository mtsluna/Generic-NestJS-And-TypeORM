import { EntityRepository, Repository } from 'typeorm';
import { Planet } from '../../entity/planet';

@EntityRepository(Planet)
export class PlanetRepository extends Repository<Planet>{

}

import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { Planet } from '../entity/planet';
import { PlanetRepository } from '../repositories/planet.repository';

@Injectable()
export class PlanetService extends BaseService<Planet>{

  constructor(
    private readonly repository: PlanetRepository){
    super(repository);
  }

}

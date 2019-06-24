import { Controller } from '@nestjs/common';
import { BaseController } from './base.controller';
import { Planet } from '../entity/planet';
import { PlanetService } from '../services/planet.service';

@Controller('planet')
export class PlanetController extends BaseController<Planet>{

  constructor(private readonly service:PlanetService){
    super(service);
  }

}

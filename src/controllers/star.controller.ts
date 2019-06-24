import { Controller } from '@nestjs/common';
import { BaseController } from './base.controller';
import { Star } from '../entity/star';
import { StarService } from '../services/star.service';

@Controller('star')
export class StarController extends BaseController<Star>{

  constructor(private readonly service:StarService){
    super(service);
  }

}

import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { Star } from '../entity/star';
import { StarRepository } from '../repositories/star.repository';

@Injectable()
export class StarService extends BaseService<Star>{

  constructor(
    private readonly repository: StarRepository){
    super(repository);
  }

}

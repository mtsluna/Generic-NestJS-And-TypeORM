import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { Factura } from '../entity/factura';
import { FacturaRepository } from '../repositories/factura.repository';

@Injectable()
export class FacturaService extends BaseService<Factura>{
    
    constructor(
        private readonly repository: FacturaRepository){
        super(repository);
    }

}

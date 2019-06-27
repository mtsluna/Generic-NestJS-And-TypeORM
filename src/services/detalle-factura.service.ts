import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { DetalleFactura } from '../entity/detalleFactura';
import { DetalleFacturaRepository } from '../repositories/detalleFactura.repository';

@Injectable()
export class DetalleFacturaService extends BaseService<DetalleFactura>{
    
    constructor(
        private readonly repository: DetalleFacturaRepository){
        super(repository);
    }

}

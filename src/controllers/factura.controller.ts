import { Controller } from '@nestjs/common';
import { BaseController } from './base.controller';
import { Factura } from '../entity/factura';
import { FacturaService } from '../services/factura.service';

@Controller('factura')
export class FacturaController extends BaseController<Factura>{
    
    constructor(private readonly service:FacturaService){
        super(service);
    }

}

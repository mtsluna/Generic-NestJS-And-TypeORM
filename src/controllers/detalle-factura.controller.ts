import { Controller } from '@nestjs/common';
import { BaseController } from './base.controller';
import { DetalleFactura } from '../entity/detalleFactura';
import { DetalleFacturaService } from '../services/detalle-factura.service';

@Controller('detalle-factura')
export class DetalleFacturaController extends BaseController<DetalleFactura>{
    
    constructor(private readonly service:DetalleFacturaService){
        super(service);
    }

}

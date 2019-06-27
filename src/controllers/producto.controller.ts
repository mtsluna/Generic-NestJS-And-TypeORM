import { Controller } from '@nestjs/common';
import { BaseController } from './base.controller';
import { Producto } from '../entity/producto';
import { ProductoService } from '../services/producto.service';

@Controller('producto')
export class ProductoController extends BaseController<Producto>{
    
    constructor(private readonly service:ProductoService){
        super(service);
    }

}

import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { Producto } from '../entity/producto';
import { ProductoRepository } from '../repositories/producto.repository';

@Injectable()
export class ProductoService extends BaseService<Producto>{
    
    constructor(
        private readonly repository: ProductoRepository){
        super(repository);
    }

}

import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { Vendedor } from '../entity/vendedor';
import { VendedorRepository } from '../repositories/vendedor.repository';

@Injectable()
export class VendedorService extends BaseService<Vendedor>{
    
    constructor(
        private readonly repository: VendedorRepository){
        super(repository);
    }

}

import { Injectable } from '@nestjs/common';
import { BaseService } from './base.service';
import { Cliente } from '../entity/cliente';
import { ClienteRepository } from '../repositories/cliente.repository';

@Injectable()
export class ClienteService extends BaseService<Cliente>{

    constructor(
        private readonly repository: ClienteRepository){
        super(repository);
    }

}

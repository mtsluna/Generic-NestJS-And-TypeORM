import { Controller } from '@nestjs/common';
import { BaseController } from './base.controller';
import { Cliente } from '../entity/cliente';
import { ClienteService } from '../services/cliente.service';

@Controller('api/v1/cliente')
export class ClienteController extends BaseController<Cliente>{

    constructor(private readonly service:ClienteService){
        super(service);
    }
    
}

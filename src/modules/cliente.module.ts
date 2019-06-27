import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteRepository } from '../repositories/cliente.repository';
import { ClienteController } from '../controllers/cliente.controller';
import { ClienteService } from '../services/cliente.service';

@Module({
  imports: [TypeOrmModule.forFeature([ClienteRepository])],
  controllers: [ClienteController],
  providers: [ClienteService]
})
export class ClienteModule {}

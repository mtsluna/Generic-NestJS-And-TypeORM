import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacturaRepository } from '../repositories/factura.repository';
import { FacturaController } from '../controllers/factura.controller';
import { FacturaService } from '../services/factura.service';

@Module({
  imports: [TypeOrmModule.forFeature([FacturaRepository])],
  controllers: [FacturaController],
  providers: [FacturaService]
})
export class FacturaModule {}

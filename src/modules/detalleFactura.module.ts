import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalleFacturaRepository } from '../repositories/detalleFactura.repository';
import { DetalleFacturaController } from '../controllers/detalle-factura.controller';
import { DetalleFacturaService } from '../services/detalle-factura.service';

@Module({
  imports: [TypeOrmModule.forFeature([DetalleFacturaRepository])],
  controllers: [DetalleFacturaController],
  providers: [DetalleFacturaService]
})
export class DetalleFacturaModule {}

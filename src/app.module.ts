import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './modules/cliente.module';
import { DetalleFacturaModule } from './modules/detalleFactura.module';
import { FacturaModule } from './modules/factura.module';
import { ProductoModule } from './modules/producto.module';
import { VendedorModule } from './modules/vendedor.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ClienteModule, DetalleFacturaModule, FacturaModule, ProductoModule, VendedorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

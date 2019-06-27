import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoRepository } from '../repositories/producto.repository';
import { ProductoController } from '../controllers/producto.controller';
import { ProductoService } from '../services/producto.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductoRepository])],
  controllers: [ProductoController],
  providers: [ProductoService]
})
export class ProductoModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendedorRepository } from '../repositories/vendedor.repository';
import { VendedorController } from '../controllers/vendedor.controller';
import { VendedorService } from '../services/vendedor.service';

@Module({
  imports: [TypeOrmModule.forFeature([VendedorRepository])],
  controllers: [VendedorController],
  providers: [VendedorService]
})
export class VendedorModule {}

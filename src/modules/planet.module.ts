import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Planet } from '../entity/planet';
import { PlanetController } from '../controllers/planet.controller';
import { PlanetService } from '../services/planet.service';
import { PlanetRepository } from '../repositories/planet.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PlanetRepository])],
  controllers: [PlanetController],
  providers: [PlanetService]
})
export class PlanetModule {}

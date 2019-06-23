import { Module } from '@nestjs/common';
import { PlanetController } from './planet.controller';
import { PlanetService } from './planet.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanetRepository } from './planet.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PlanetRepository])],
  controllers: [PlanetController],
  providers: [PlanetService]
})
export class PlanetModule {}

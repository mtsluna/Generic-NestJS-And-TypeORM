import { Module } from '@nestjs/common';
import { PlanetController } from './planet.controller';
import { PlanetService } from './planet.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Planet } from '../../entity/planet';

@Module({
  imports: [TypeOrmModule.forFeature([Planet])],
  controllers: [PlanetController],
  providers: [PlanetService]
})
export class PlanetModule {}

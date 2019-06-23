import { Module } from '@nestjs/common';
import { AppController } from '../../app.controller';
import { AppService } from '../../app.service';
import { StarController } from './star.controller';
import { StarService } from './star.service';
import { Star } from '../../entity/star';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Star])],
  controllers: [AppController, StarController],
  providers: [AppService, StarService],
})
export class StarModule {}

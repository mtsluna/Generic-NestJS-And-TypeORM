import { Module } from '@nestjs/common';
import { AppController } from '../../app.controller';
import { AppService } from '../../app.service';
import { StarController } from './star.controller';
import { StarService } from './star.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StarRepository } from './star.repository';

@Module({
  imports: [TypeOrmModule.forFeature([StarRepository])],
  controllers: [AppController, StarController],
  providers: [AppService, StarService],
})
export class StarModule {}

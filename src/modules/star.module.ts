import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Star } from '../entity/star';
import { StarController } from '../controllers/star.controller';
import { StarService } from '../services/star.service';
import { StarRepository } from '../repositories/star.repository';

@Module({
  imports: [TypeOrmModule.forFeature([StarRepository])],
  controllers: [StarController],
  providers: [StarService],
})
export class StarModule {}

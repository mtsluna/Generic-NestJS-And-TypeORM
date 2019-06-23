import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StarModule } from './module/star/star.module';
import { PlanetModule } from './module/planet/planet.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), StarModule, PlanetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

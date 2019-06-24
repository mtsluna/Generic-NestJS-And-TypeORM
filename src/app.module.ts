import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StarModule } from './modules/star.module';
import { PlanetModule } from './modules/planet.module';

@Module({
  imports: [TypeOrmModule.forRoot(), StarModule, PlanetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

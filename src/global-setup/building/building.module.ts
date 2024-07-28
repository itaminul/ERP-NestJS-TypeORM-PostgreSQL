import { Module } from '@nestjs/common';
import { BuildingService } from './building.service';
import { BuildingController } from './building.controller';

@Module({
  providers: [BuildingService],
  controllers: [BuildingController]
})
export class BuildingModule {}

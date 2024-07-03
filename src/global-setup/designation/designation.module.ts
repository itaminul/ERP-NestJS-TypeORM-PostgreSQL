import { Module } from '@nestjs/common';
import { DesignationController } from './designation.controller';
import { DesignationService } from './designation.service';

@Module({
  controllers: [DesignationController],
  providers: [DesignationService]
})
export class DesignationModule {}

import { Module } from '@nestjs/common';
import { FintrackTransactionModule } from './modules/FintrackTransactionModule';

@Module({
  imports: [FintrackTransactionModule],
})
export class AppModule {}

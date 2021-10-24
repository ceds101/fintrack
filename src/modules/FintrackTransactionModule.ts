import { Module } from '@nestjs/common';
import { TransactionController } from 'src/controllers/TransactionController';
import { TransactionService } from 'src/services/TransactionService';

@Module({
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class FintrackTransactionModule {}

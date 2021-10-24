import { Injectable } from '@nestjs/common';
import { Transaction } from 'src/models/transaction';

@Injectable()
export class TransactionService {
  getTransactions(): string {
    return 'test transaction get';
  }
}

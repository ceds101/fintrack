import { Injectable } from '@nestjs/common';
import { Transaction } from 'src/models/transaction';

@Injectable()
export class TransactionService {
  create(transaction: Transaction) {
    return 'test transaction create';
  }

  findAll() {
    return 'test transaction getAll';
  }

  findOne(id: string) {
    return id;
  }

  update(id: string, transaction: Transaction) {
    return id;
  }

  remove(id: string) {
    return id;
  }
}

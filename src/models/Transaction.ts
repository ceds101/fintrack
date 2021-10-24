export class Transaction {
  constructor(
    public id: number,
    public name: string,
    public amount: number,
    public datetime: Date,
    public note: string,
  ) {}
}

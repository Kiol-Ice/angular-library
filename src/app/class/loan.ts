export class Loan {
  id: number;
  memberId: number;
  bookId: number;
  date: string;
  duration: number;
  isReturned: boolean;

  constructor(id: number, memberId: number, bookId: number, date: string, duration: number, isReturned: boolean){
    this.id = id;
    this.memberId = memberId;
    this.bookId = bookId;
    this.date = date;
    this.duration = duration;
    this.isReturned = isReturned;
  }
}

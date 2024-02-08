import { Injectable } from '@angular/core';

import loansJson from '../assets/loans.json';
import { Loan } from './class/loan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  loans :Loan[] = [];

  constructor() {
    loansJson.forEach((loan) => {
      let newLoan = new Loan(loan.id, loan.memberId, loan.bookId, loan.date, loan.duration, loan.isReturned);
      this.loans.push(newLoan);
    });
  }

  getLoans(): Loan[] {
    return this.loans;
  }

  getLoan(id: number): Loan | undefined {
    return this.loans.find(loan=>loan.id == id);
  }
}

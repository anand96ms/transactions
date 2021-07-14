import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransactionHistory } from '../../shared/model/transaction-history.model';
import { TransactionService } from '../../shared/services/transferService';

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.scss']
})
export class RecentTransactionsComponent implements OnInit {
  search: string;
  transactionHistory: TransactionHistory[] = [];
  xtransactionData: TransactionHistory;
  content: TransactionHistory[] = [];
  @Input()
  set transactionData(param: TransactionHistory) {
    this.xtransactionData = param;
    this.updateTransactionHistory();
  }
  constructor(private service: TransactionService) { }

  ngOnInit(): void {
    this.service.get().subscribe(data => {
      const d = 'data';
      this.transactionHistory = data[d];
      this.content = JSON.parse(JSON.stringify(this.transactionHistory));
      this.handleSortDate();
    });
  }
  updateTransactionHistory() {
    this.transactionHistory.unshift(this.xtransactionData);
    this.content = JSON.parse(JSON.stringify(this.transactionHistory));
  }
  handleSortDate() {
    this.transactionHistory = this.transactionHistory.sort((logA: TransactionHistory, logB: TransactionHistory) => {
      return logB.dates.valueDate - logA.dates.valueDate;
    });
  }
  searchThis() {
    const searchText = this.search.toLowerCase();
    this.transactionHistory = this.content.filter((element) => (element.merchant.name.toLowerCase()).indexOf(searchText) > -1);
  }
  inputChange(e) {
    this.search = e;
    this.searchThis();
  }
}

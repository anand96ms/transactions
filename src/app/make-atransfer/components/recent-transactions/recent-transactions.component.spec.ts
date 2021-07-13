import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import * as mockData from '../../../../mock/mock';
import { RecentTransactionsComponent } from './recent-transactions.component';

describe('RecentTransactionsComponent', () => {
  let component: RecentTransactionsComponent;
  let fixture: ComponentFixture<RecentTransactionsComponent>;

  const transferData = mockData.data[0];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentTransactionsComponent],
      imports: [
        HttpClientModule,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should update transaction history list', () => {
    component.transactionHistory = JSON.parse(JSON.stringify(mockData.data));
    const len = component.transactionHistory.length;
    component.xtransactionData = transferData;
    component.updateTransactionHistory();
    expect(component.transactionHistory.length).toBe(len + 1);
  });
  it('should sort transation list in descending order', () => {
    component.transactionHistory = mockData.data;
    component.handleSortDate();
    expect(component.transactionHistory).toEqual(mockData.sortedBydateData);
  });
  it('should search transaction history list', () => {
    component.transactionHistory = JSON.parse(JSON.stringify(mockData.data));
    component.content = mockData.data;
    component.search = 'Backbase';
    component.searchThis();
    expect(component.transactionHistory).toEqual(mockData.seachResultData);
  });
});

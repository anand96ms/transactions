import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MakeATransferComponent } from './components/make-atransfer/make-atransfer.component';
import { RecentTransactionsComponent } from './components/recent-transactions/recent-transactions.component';
import { BbUIModule } from '../bb-ui/bb-ui.module';
import { NgbdModalBasicComponent } from '../shared/modal/modal-basic';



@NgModule({
  declarations: [MakeATransferComponent,
    RecentTransactionsComponent,
    NgbdModalBasicComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BbUIModule
  ],
  exports: [MakeATransferComponent]
})
export class MakeATransferModule { }

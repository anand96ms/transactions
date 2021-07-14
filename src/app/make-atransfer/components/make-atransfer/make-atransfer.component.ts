import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalBasicComponent } from 'src/app/shared/modal/modal-basic';
import * as tModel from '../../shared/model/transaction-history.model';

@Component({
  selector: 'app-make-atransfer',
  templateUrl: './make-atransfer.component.html',
  styleUrls: ['./make-atransfer.component.scss']
})
export class MakeATransferComponent implements OnInit {

  transactionHistory: tModel.TransactionHistory[] = [];
  headerName = tModel.headerName;
  transferForm: FormGroup;
  fromAmount: number = tModel.fAmount;
  fromText: string = tModel.fText;
  toAccount = '';
  amount: number;
  transactionData: tModel.TransactionHistory = tModel.tData;
  fromAccount: string;
  isPreview: boolean;
  isInvalid: boolean;
  previewData: any;
  constructor(private formBuilder: FormBuilder, private modalService: NgbModal) { }
  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.transferForm = this.formBuilder.group({
      fromAccount: [this.fromText + this.fromAmount],
      toAccount: [this.toAccount, Validators.required],
      amount: [this.amount, Validators.required]
    });
    this.transferForm.get('fromAccount').disable();
  }
  onSubmit() {
    this.doValidate();
    if (this.isPreview) {
      this.showPreview();
    }
  }
  showPreview() {
    this.toAccount = this.transferForm.get('toAccount').value;
    this.amount = this.transferForm.get('amount').value;
    const modalRef = this.modalService.open(NgbdModalBasicComponent);
    modalRef.componentInstance.toAccount = this.toAccount;
    modalRef.componentInstance.amount = this.amount;
    modalRef.result.then((result) => {
      this.closeReason(result);
    }, (reason) => {
      console.log(`Dismissed ${reason}`);
    });
  }
  closeReason(result: any) {
    if (result === 'Ok') {
      this.onTransfer();
    }
  }
  doValidate() {
    const overdraft = this.fromAmount - this.transferForm.get('amount').value;
    if (overdraft <= -501) {
      this.isInvalid = true;
      this.isPreview = false;
    }
    else {
      this.isPreview = true;
      this.isInvalid = false;
    }
  }
  onTransfer() {
    this.fromAmount = this.fromAmount - this.transferForm.get('amount').value;
    this.fromAccount = this.fromText + this.fromAmount;
    this.transferForm.get('fromAccount').patchValue(this.fromAccount);
    this.toAccount = this.transferForm.get('toAccount').value;
    this.amount = this.transferForm.get('amount').value;
    this.prepareTransferData();
    this.headerName = 'Make Transfer';
    this.transferForm.reset();
    this.transferForm.get('fromAccount').patchValue(this.fromAccount);
    this.isPreview = false;
  }
  private prepareTransferData() {
    const tData = JSON.parse(JSON.stringify(this.transactionData));
    const date = new Date().getTime();
    tData.dates.valueDate = date;
    tData.transaction.amountCurrency.amount = this.transferForm.value.amount;
    tData.merchant.name = this.transferForm.value.toAccount;
    this.transactionData = tData;
  }
}

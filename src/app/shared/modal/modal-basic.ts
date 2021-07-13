import { Component, Input, ViewChild } from '@angular/core';

import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-basic',
  templateUrl: './modal-basic.html'
})
export class NgbdModalBasicComponent {
  @Input() toAccount;
  @Input() amount;

  constructor(public activeModal: NgbActiveModal) { }
}

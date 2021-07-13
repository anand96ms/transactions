(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\X013663\Desktop\bb\fund-transfer-main\src\main.ts */"zUnb");


/***/ }),

/***/ "2+uK":
/*!*************************************************************!*\
  !*** ./src/app/bb-ui/components/filter/filter.component.ts ***!
  \*************************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FilterComponent {
    constructor() {
        this.inputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onInputChange(event) {
        this.inputChange.emit(event);
    }
}
FilterComponent.ɵfac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(); };
FilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterComponent, selectors: [["app-filter"]], outputs: { inputChange: "inputChange" }, decls: 7, vars: 0, consts: [["action", "#", 1, "filter-form", "w-50"], [1, "form-group"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "lni", "lni-search"], ["type", "text", "id", "transactions", "aria-describedby", "filterTransactions", "placeholder", "filter transactions", "data-test-hook", "filterInput", 1, "form-control", 3, "keyup"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function FilterComponent_Template_input_keyup_6_listener($event) { return ctx.onInputChange($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JiLXVpL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-filter',
                templateUrl: './filter.component.html',
                styleUrls: ['./filter.component.scss']
            }]
    }], null, { inputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "2c+8":
/*!**************************************************************************!*\
  !*** ./src/app/make-atransfer/shared/model/transaction-history.model.ts ***!
  \**************************************************************************/
/*! exports provided: tData, headerName, fAmount, fText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tData", function() { return tData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerName", function() { return headerName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fAmount", function() { return fAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fText", function() { return fText; });
// export interface TransactionHistory {
//     categoryCode: string;
//     dates: Dates;
//     transaction: Transaction;
//     merchant: Merchant;
// }
let tData = {
    "categoryCode": "#c12020",
    "dates": {
        "valueDate": 1600370800000
    },
    "transaction": {
        "amountCurrency": {
            "amount": "22.10",
            "currencyCode": "EUR"
        },
        "type": "Online Transfer",
        "creditDebitIndicator": "DBIT"
    },
    "merchant": {
        "name": "Amazon Online Store",
        "accountNumber": "SI64397745065188826"
    }
};
let headerName = 'Make Transfer';
let fAmount = 1500;
let fText = 'My Personal Account: $';


/***/ }),

/***/ "3A11":
/*!*********************************************!*\
  !*** ./src/app/shared/modal/modal-basic.ts ***!
  \*********************************************/
/*! exports provided: NgbdModalBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalBasicComponent", function() { return NgbdModalBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");



class NgbdModalBasicComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
}
NgbdModalBasicComponent.ɵfac = function NgbdModalBasicComponent_Factory(t) { return new (t || NgbdModalBasicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
NgbdModalBasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgbdModalBasicComponent, selectors: [["app-modal-basic"]], inputs: { toAccount: "toAccount", amount: "amount" }, decls: 25, vars: 2, consts: [[1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"], ["type", "button", 1, "btn", "btn-outline-dark", "transfer", 3, "click"]], template: function NgbdModalBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Review Transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdModalBasicComponent_Template_button_click_3_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Are you ready to send out this transfer?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "It will bw sent to account:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "With the amount of:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdModalBasicComponent_Template_button_click_21_listener() { return ctx.activeModal.close("Close"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdModalBasicComponent_Template_button_click_23_listener() { return ctx.activeModal.close("Ok"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Send Transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.toAccount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.amount, "");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbdModalBasicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-basic',
                templateUrl: './modal-basic.html'
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, { toAccount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], amount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "4HMI":
/*!*********************************************************************************!*\
  !*** ./src/app/bb-ui/components/transaction-item/transaction-item.component.ts ***!
  \*********************************************************************************/
/*! exports provided: TransactionItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionItemComponent", function() { return TransactionItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = [[["", "data-test-hook", "transactioncolour"]], [["", "data-test-hook", "transactiondate"]], [["", "data-test-hook", "transactionmerchantname"]], [["", "data-test-hook", "transactiontype"]], [["", "data-test-hook", "transactionamount"]]];
const _c1 = ["[data-test-hook='transactionColour']", "[data-test-hook='transactionDate']", "[data-test-hook='transactionMerchantName']", "[data-test-hook='transactionType']", "[data-test-hook='transactionAmount']"];
class TransactionItemComponent {
}
TransactionItemComponent.ɵfac = function TransactionItemComponent_Factory(t) { return new (t || TransactionItemComponent)(); };
TransactionItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransactionItemComponent, selectors: [["app-transaction-item"]], ngContentSelectors: _c1, decls: 6, vars: 0, consts: [[1, "merchant-details"]], template: function TransactionItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["]", ""]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1, ["]", ""]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5, 4);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JiLXVpL2NvbXBvbmVudHMvdHJhbnNhY3Rpb24taXRlbS90cmFuc2FjdGlvbi1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-transaction-item',
                templateUrl: './transaction-item.component.html',
                styleUrls: ['./transaction-item.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "4jom":
/*!**************************************************************************************!*\
  !*** ./src/app/make-atransfer/components/make-atransfer/make-atransfer.component.ts ***!
  \**************************************************************************************/
/*! exports provided: MakeATransferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeATransferComponent", function() { return MakeATransferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_shared_modal_modal_basic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/modal/modal-basic */ "3A11");
/* harmony import */ var _shared_model_transaction_history_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/model/transaction-history.model */ "2c+8");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _bb_ui_components_submit_button_submit_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../bb-ui/components/submit-button/submit-button.component */ "qqWu");
/* harmony import */ var _recent_transactions_recent_transactions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../recent-transactions/recent-transactions.component */ "pN6Z");










function MakeATransferComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MakeATransferComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MakeATransferComponent_div_21_div_1_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.transferForm.controls["toAccount"].errors.required);
} }
function MakeATransferComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This field is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MakeATransferComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MakeATransferComponent_div_26_div_1_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.transferForm.controls["amount"].errors.required);
} }
function MakeATransferComponent_label_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " There is not enough balance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MakeATransferComponent {
    constructor(formBuilder, modalService) {
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.transactionHistory = [];
        this.headerName = _shared_model_transaction_history_model__WEBPACK_IMPORTED_MODULE_3__["headerName"];
        this.fromAmount = _shared_model_transaction_history_model__WEBPACK_IMPORTED_MODULE_3__["fAmount"];
        this.fromText = _shared_model_transaction_history_model__WEBPACK_IMPORTED_MODULE_3__["fText"];
        this.toAccount = '';
        this.transactionData = _shared_model_transaction_history_model__WEBPACK_IMPORTED_MODULE_3__["tData"];
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.transferForm = this.formBuilder.group({
            fromAccount: [this.fromText + this.fromAmount],
            toAccount: [this.toAccount, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            amount: [this.amount, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
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
        const modalRef = this.modalService.open(src_app_shared_modal_modal_basic__WEBPACK_IMPORTED_MODULE_2__["NgbdModalBasicComponent"]);
        modalRef.componentInstance.toAccount = this.toAccount;
        modalRef.componentInstance.amount = this.amount;
        modalRef.result.then((result) => {
            this.closeReason(result);
        }, (reason) => {
            console.log(`Dismissed ${reason}`);
        });
    }
    closeReason(result) {
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
    prepareTransferData() {
        const tData = JSON.parse(JSON.stringify(this.transactionData));
        const date = new Date().getTime();
        tData.dates.valueDate = date;
        tData.transaction.amountCurrency.amount = this.transferForm.value.amount;
        tData.merchant.name = this.transferForm.value.toAccount;
        this.transactionData = tData;
    }
}
MakeATransferComponent.ɵfac = function MakeATransferComponent_Factory(t) { return new (t || MakeATransferComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"])); };
MakeATransferComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MakeATransferComponent, selectors: [["app-make-atransfer"]], decls: 35, vars: 5, consts: [[1, "row", "topDiv"], [1, "col-md-1", "col-sm-1"], [1, "col-md-3", "col-sm-12"], [1, "headerDesign"], [1, "far", "fa-credit-card"], [3, "formGroup", "ngSubmit"], [1, "row"], ["id", "from", "type", "text", "formControlName", "fromAccount", 1, "form-control"], ["id", "to", "type", "text", "formControlName", "toAccount"], [4, "ngIf"], ["id", "amount", "placeholder", "$0.00", "type", "text", "onkeydown", "return event.keyCode !== 69 && event.keyCode !== 189", "formControlName", "amount"], ["class", "erroMsg", 4, "ngIf"], [1, "col-sm-12"], [1, "col-sm-12", "col-md-7"], [3, "transactionData"], [1, "col-1"], [1, "erroMsg"]], template: function MakeATransferComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Make");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MakeATransferComponent_Template_form_ngSubmit_12_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " From Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " To Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MakeATransferComponent_div_21_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MakeATransferComponent_div_26_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, MakeATransferComponent_label_27_Template, 2, 0, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-submit-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-recent-transactions", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.transferForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.transferForm.controls["toAccount"].invalid && (ctx.transferForm.controls["toAccount"].dirty || ctx.transferForm.controls["toAccount"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.transferForm.controls["amount"].invalid && (ctx.transferForm.controls["amount"].dirty || ctx.transferForm.controls["amount"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isInvalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("transactionData", ctx.transactionData);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _bb_ui_components_submit_button_submit_button_component__WEBPACK_IMPORTED_MODULE_6__["SubmitButtonComponent"], _recent_transactions_recent_transactions_component__WEBPACK_IMPORTED_MODULE_7__["RecentTransactionsComponent"]], styles: ["header[_ngcontent-%COMP%] {\n  background-color: #1180aa;\n  color: #ffffff;\n  padding: 15px;\n}\n\n\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #e25a2c;\n  color: #ffffff;\n  padding: 7px 20px;\n  margin: 8px 0;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  float: right;\n}\n\nsection[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  padding: 20px;\n}\n\n.topDiv[_ngcontent-%COMP%] {\n  padding: 3% 0;\n}\n\n.imgFormatter[_ngcontent-%COMP%] {\n  height: 14px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  overflow-wrap: break-word;\n}\n\n.transferLabel[_ngcontent-%COMP%] {\n  padding: 6px;\n}\n\n.erroMsg[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFrZS1hdHJhbnNmZXIvY29tcG9uZW50cy9tYWtlLWF0cmFuc2Zlci9tYWtlLWF0cmFuc2Zlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQSxzQkFBQTs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7QUFHRjs7QUFEQTtFQUNFLFlBQUE7QUFJRjs7QUFGQTtFQUNFLHlCQUFBO0FBS0Y7O0FBSEE7RUFDRSxZQUFBO0FBTUY7O0FBSkE7RUFDRSxVQUFBO0FBT0YiLCJmaWxlIjoic3JjL2FwcC9tYWtlLWF0cmFuc2Zlci9jb21wb25lbnRzL21ha2UtYXRyYW5zZmVyL21ha2UtYXRyYW5zZmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExODBhYTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi8qIFN0eWxlIHRoZSBidXR0b25zICovXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTI1YTJjO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogN3B4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsb2F0OiByaWdodDtcbn1cbnNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnRvcERpdiB7XG4gIHBhZGRpbmc6IDMlIDA7XG59XG4uaW1nRm9ybWF0dGVyIHtcbiAgaGVpZ2h0OiAxNHB4O1xufVxubGFiZWwge1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xufVxuLnRyYW5zZmVyTGFiZWwge1xuICBwYWRkaW5nOiA2cHg7XG59XG4uZXJyb01zZyB7XG4gIGNvbG9yOiByZWQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MakeATransferComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-make-atransfer',
                templateUrl: './make-atransfer.component.html',
                styleUrls: ['./make-atransfer.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "KqPe":
/*!*************************************************************!*\
  !*** ./src/app/bb-ui/components/footer/footer.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    ngOnInit() {
        this.year = new Date().getFullYear();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 6, vars: 1, consts: [[1, "m-0"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Peachtree Bank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A9 ", ctx.year, "");
    } }, styles: ["footer[_ngcontent-%COMP%] {\n  height: 100%;\n  font-size: 0.8rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  color: #00a1e0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmItdWkvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9iYi11aS9zdHlsZXMvX3ZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNDRmE7QURDZiIsImZpbGUiOiJzcmMvYXBwL2JiLXVpL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy9fdmFycy5zY3NzJztcblxuZm9vdGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDB2dztcbiAgY29sb3I6ICRwcmltYXJ5LWJsdWU7XG59XG4iLCJcbi8vIHNwYWNpbmdcbiRzbWFsbC1zcGFjaW5nOiA1cHg7XG4kbWVkaXVtLXNwYWNpbmc6IDEwcHg7XG4kbGFyZ2Utc3BhY2luZzogMjBweDtcblxuLy8gY29sb3JzXG4kcHJpbWFyeS1ibHVlOiAjMDBhMWUwO1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "MpM0":
/*!*********************************************************!*\
  !*** ./src/app/bb-ui/components/logo/logo.component.ts ***!
  \*********************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LogoComponent {
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["app-logo"]], decls: 2, vars: 0, consts: [[1, "logo"], ["src", "assets/logo.jpg", "alt", "Peachtree Bank"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".logo[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmItdWkvY29tcG9uZW50cy9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQkFBQTtBQURGO0FBR0U7RUFDRSxZQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9iYi11aS9jb21wb25lbnRzL2xvZ28vbG9nby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3N0eWxlcy92YXJzLnNjc3MnO1xuXG4ubG9nbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICBpbWcge1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logo',
                templateUrl: './logo.component.html',
                styleUrls: ['./logo.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bb_ui_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bb-ui/components/logo/logo.component */ "MpM0");
/* harmony import */ var _make_atransfer_components_make_atransfer_make_atransfer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./make-atransfer/components/make-atransfer/make-atransfer.component */ "4jom");
/* harmony import */ var _bb_ui_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bb-ui/components/footer/footer.component */ "KqPe");





class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 0, consts: [[1, "alignleft"], [1, "alignright", "headertxt"], [2, "clear", "both"], [1, "section"], [1, "footerClass"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Frontend ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Technical Assignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-make-atransfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_bb_ui_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_1__["LogoComponent"], _make_atransfer_components_make_atransfer_make_atransfer_component__WEBPACK_IMPORTED_MODULE_2__["MakeATransferComponent"], _bb_ui_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["header[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  padding: 15px;\n}\n\n.section[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n}\n\n.footerClass[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n\n.alignleft[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.alignright[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.headertxt[_ngcontent-%COMP%] {\n  color: #00a1e0;\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQ0FBQTtVQUFBLDBCQUFBO0FBRUY7O0FBQ0E7RUFDRSx5QkFBQTtBQUVGOztBQUNBO0VBQ0MsV0FBQTtBQUVEOztBQUFBO0VBQ0MsWUFBQTtBQUdEOztBQURBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFJRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4uc2VjdGlvbntcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG59XG5cbi5mb290ZXJDbGFzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5hbGlnbmxlZnQge1xuXHRmbG9hdDogbGVmdDtcbn1cbi5hbGlnbnJpZ2h0IHtcblx0ZmxvYXQ6IHJpZ2h0O1xufVxuLmhlYWRlcnR4dHtcbiAgY29sb3I6ICMwMGExZTA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _make_atransfer_make_atransfer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./make-atransfer/make-atransfer.module */ "e6Ow");
/* harmony import */ var _bb_ui_bb_ui_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bb-ui/bb-ui.module */ "fPti");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _make_atransfer_make_atransfer_module__WEBPACK_IMPORTED_MODULE_4__["MakeATransferModule"],
            _bb_ui_bb_ui_module__WEBPACK_IMPORTED_MODULE_5__["BbUIModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _make_atransfer_make_atransfer_module__WEBPACK_IMPORTED_MODULE_4__["MakeATransferModule"],
        _bb_ui_bb_ui_module__WEBPACK_IMPORTED_MODULE_5__["BbUIModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _make_atransfer_make_atransfer_module__WEBPACK_IMPORTED_MODULE_4__["MakeATransferModule"],
                    _bb_ui_bb_ui_module__WEBPACK_IMPORTED_MODULE_5__["BbUIModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "e6Ow":
/*!*********************************************************!*\
  !*** ./src/app/make-atransfer/make-atransfer.module.ts ***!
  \*********************************************************/
/*! exports provided: MakeATransferModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeATransferModule", function() { return MakeATransferModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_make_atransfer_make_atransfer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/make-atransfer/make-atransfer.component */ "4jom");
/* harmony import */ var _components_recent_transactions_recent_transactions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/recent-transactions/recent-transactions.component */ "pN6Z");
/* harmony import */ var _bb_ui_bb_ui_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bb-ui/bb-ui.module */ "fPti");
/* harmony import */ var _shared_modal_modal_basic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/modal/modal-basic */ "3A11");









class MakeATransferModule {
}
MakeATransferModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MakeATransferModule });
MakeATransferModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MakeATransferModule_Factory(t) { return new (t || MakeATransferModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _bb_ui_bb_ui_module__WEBPACK_IMPORTED_MODULE_6__["BbUIModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MakeATransferModule, { declarations: [_components_make_atransfer_make_atransfer_component__WEBPACK_IMPORTED_MODULE_4__["MakeATransferComponent"],
        _components_recent_transactions_recent_transactions_component__WEBPACK_IMPORTED_MODULE_5__["RecentTransactionsComponent"],
        _shared_modal_modal_basic__WEBPACK_IMPORTED_MODULE_7__["NgbdModalBasicComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _bb_ui_bb_ui_module__WEBPACK_IMPORTED_MODULE_6__["BbUIModule"]], exports: [_components_make_atransfer_make_atransfer_component__WEBPACK_IMPORTED_MODULE_4__["MakeATransferComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MakeATransferModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_make_atransfer_make_atransfer_component__WEBPACK_IMPORTED_MODULE_4__["MakeATransferComponent"],
                    _components_recent_transactions_recent_transactions_component__WEBPACK_IMPORTED_MODULE_5__["RecentTransactionsComponent"],
                    _shared_modal_modal_basic__WEBPACK_IMPORTED_MODULE_7__["NgbdModalBasicComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _bb_ui_bb_ui_module__WEBPACK_IMPORTED_MODULE_6__["BbUIModule"]
                ],
                exports: [_components_make_atransfer_make_atransfer_component__WEBPACK_IMPORTED_MODULE_4__["MakeATransferComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fPti":
/*!***************************************!*\
  !*** ./src/app/bb-ui/bb-ui.module.ts ***!
  \***************************************/
/*! exports provided: BbUIModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BbUIModule", function() { return BbUIModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/filter/filter.component */ "2+uK");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer/footer.component */ "KqPe");
/* harmony import */ var _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/logo/logo.component */ "MpM0");
/* harmony import */ var _components_submit_button_submit_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/submit-button/submit-button.component */ "qqWu");
/* harmony import */ var _components_transaction_item_transaction_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/transaction-item/transaction-item.component */ "4HMI");







const COMPONENTS = [
    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"],
    _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_3__["LogoComponent"],
    _components_submit_button_submit_button_component__WEBPACK_IMPORTED_MODULE_4__["SubmitButtonComponent"],
    _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_1__["FilterComponent"],
    _components_transaction_item_transaction_item_component__WEBPACK_IMPORTED_MODULE_5__["TransactionItemComponent"],
];
class BbUIModule {
}
BbUIModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BbUIModule });
BbUIModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BbUIModule_Factory(t) { return new (t || BbUIModule)(); }, providers: [], imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BbUIModule, { declarations: [_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"],
        _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_3__["LogoComponent"],
        _components_submit_button_submit_button_component__WEBPACK_IMPORTED_MODULE_4__["SubmitButtonComponent"],
        _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_1__["FilterComponent"],
        _components_transaction_item_transaction_item_component__WEBPACK_IMPORTED_MODULE_5__["TransactionItemComponent"]], exports: [_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"],
        _components_logo_logo_component__WEBPACK_IMPORTED_MODULE_3__["LogoComponent"],
        _components_submit_button_submit_button_component__WEBPACK_IMPORTED_MODULE_4__["SubmitButtonComponent"],
        _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_1__["FilterComponent"],
        _components_transaction_item_transaction_item_component__WEBPACK_IMPORTED_MODULE_5__["TransactionItemComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BbUIModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: COMPONENTS,
                imports: [],
                exports: COMPONENTS,
                providers: [],
                bootstrap: [],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "n3Hg":
/*!*******************************************************************!*\
  !*** ./src/app/make-atransfer/shared/services/transferService.ts ***!
  \*******************************************************************/
/*! exports provided: TransactionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionService", function() { return TransactionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class TransactionService {
    constructor(_http) {
        this._http = _http;
    }
    get() {
        return this._http.get('assets/transactions.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            return JSON.parse(JSON.stringify(response));
        }));
    }
}
TransactionService.ɵfac = function TransactionService_Factory(t) { return new (t || TransactionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TransactionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TransactionService, factory: TransactionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "pN6Z":
/*!************************************************************************************************!*\
  !*** ./src/app/make-atransfer/components/recent-transactions/recent-transactions.component.ts ***!
  \************************************************************************************************/
/*! exports provided: RecentTransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentTransactionsComponent", function() { return RecentTransactionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_transferService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/transferService */ "n3Hg");
/* harmony import */ var _bb_ui_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../bb-ui/components/filter/filter.component */ "2+uK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function RecentTransactionsComponent_li_14_label_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RecentTransactionsComponent_li_14_label_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "color": a0 }; };
function RecentTransactionsComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RecentTransactionsComponent_li_14_label_11_Template, 2, 0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RecentTransactionsComponent_li_14_label_12_Template, 2, 0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const history_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", history_r1.categoryCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 9, history_r1.dates.valueDate, "MMM d"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](history_r1.merchant.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", history_r1.transaction.type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, history_r1.transaction.creditDebitIndicator == "CRDT" ? "green" : "red"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", history_r1.transaction.creditDebitIndicator == "CRDT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", history_r1.transaction.creditDebitIndicator == "DBIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](14, 12, history_r1.transaction.amountCurrency.amount, "USD", true), "");
} }
class RecentTransactionsComponent {
    constructor(service) {
        this.service = service;
        this.transactionHistory = [];
        this.content = [];
    }
    set transactionData(param) {
        this.xtransactionData = param;
        this.updateTransactionHistory();
    }
    ngOnInit() {
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
        this.transactionHistory = this.transactionHistory.sort((logA, logB) => {
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
RecentTransactionsComponent.ɵfac = function RecentTransactionsComponent_Factory(t) { return new (t || RecentTransactionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_transferService__WEBPACK_IMPORTED_MODULE_1__["TransactionService"])); };
RecentTransactionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecentTransactionsComponent, selectors: [["app-recent-transactions"]], inputs: { transactionData: "transactionData" }, decls: 15, vars: 1, consts: [[1, "headerDesign"], [1, "fas", "fa-list-ul"], [1, "row", "filterDiv"], [1, "col-sm-12", "col-md-12"], [3, "inputChange"], [1, "transactions-container"], [4, "ngFor", "ngForOf"], [1, "bar"], [1, "date"], [1, "transactionType"], [1, "amount", 3, "ngStyle"], [4, "ngIf"]], template: function RecentTransactionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Transactions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-filter", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("inputChange", function RecentTransactionsComponent_Template_app_filter_inputChange_11_listener($event) { return ctx.inputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, RecentTransactionsComponent_li_14_Template, 15, 18, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.transactionHistory);
    } }, directives: [_bb_ui_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_2__["FilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: ["header[_ngcontent-%COMP%] {\n  background-color: #1180aa;\n  color: #ffffff;\n  padding: 15px;\n}\n\nsection[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  padding: 5px;\n}\n\n\n\ninput[type=text][_ngcontent-%COMP%] {\n  margin: 0 0;\n}\n\n.formatSortLabel[_ngcontent-%COMP%] {\n  padding: 4px 11px;\n  float: left;\n  font-size: 12px;\n}\n\n.trasactionImg[_ngcontent-%COMP%] {\n  height: 36px;\n  filter: grayscale(100%);\n}\n\n.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  border: 1px solid #ada8a8;\n  padding: 4px 11px;\n  \n  cursor: pointer;\n  \n  float: left;\n  \n}\n\n.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:last-child) {\n  border-right: none;\n  \n}\n\n\n\n.btn-group[_ngcontent-%COMP%]:after {\n  content: \"\";\n  clear: both;\n  display: table;\n  border: 1px solid #ada8a8;\n}\n\n\n\n.btn-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #e8eef1;\n}\n\n.clearFilter[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  font-size: 20px;\n}\n\n.rowFormat[_ngcontent-%COMP%] {\n  border-left: solid;\n}\n\nul[_ngcontent-%COMP%] {\n  margin: 0 15px;\n  border-top: 2px solid #CACACA;\n  border-right: 2px solid #CACACA;\n  padding-left: 0%;\n}\n\nli[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n}\n\nli[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  border-bottom: 2px solid #CACACA;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  width: 10px;\n  border-bottom: none;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  text-align: right;\n  padding-right: 10px;\n  font-weight: 700;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .transactionType[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  line-height: 20px;\n  display: block;\n  font-weight: 700;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  width: 12%;\n}\n\n.filterDiv[_ngcontent-%COMP%] {\n  margin-left: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFrZS1hdHJhbnNmZXIvY29tcG9uZW50cy9yZWNlbnQtdHJhbnNhY3Rpb25zL3JlY2VudC10cmFuc2FjdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FBQUY7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQSxpQkFBQTs7QUFDQTtFQUNFLFdBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFHRjs7QUFEQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtBQUlGOztBQUZBO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQW1CLGlCQUFBO0VBQ25CLGVBQUE7RUFBaUIsc0JBQUE7RUFDakIsV0FBQTtFQUFhLG1DQUFBO0FBUWY7O0FBTEE7RUFDRSxrQkFBQTtFQUFvQiwyQkFBQTtBQVN0Qjs7QUFOQSxpQ0FBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBU0Y7O0FBTkEsb0NBQUE7O0FBQ0E7RUFDRSx5QkFBQTtBQVNGOztBQVBBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVVGOztBQVJBO0VBQ0Usa0JBQUE7QUFXRjs7QUFQQTtFQUNFLGNBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUFVRjs7QUFSQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBV0Y7O0FBVEE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FBWUY7O0FBVEE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7QUFZRjs7QUFUQTtFQUNFLGtCQUFBO0FBWUY7O0FBVkE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFhRjs7QUFWQTtFQUNFLGdCQUFBO0FBYUY7O0FBWEE7O0VBRUUsZUFBQTtBQWNGOztBQVpBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFlRjs7QUFaQTtFQUNFLFVBQUE7QUFlRjs7QUFiQTtFQUNFLFVBQUE7QUFnQkY7O0FBZEE7RUFDRSxlQUFBO0FBaUJGIiwiZmlsZSI6InNyYy9hcHAvbWFrZS1hdHJhbnNmZXIvY29tcG9uZW50cy9yZWNlbnQtdHJhbnNhY3Rpb25zL3JlY2VudC10cmFuc2FjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTgwYWE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi8qIFN0eWxlIGlucHV0cyAqL1xuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICBtYXJnaW46IDAgMDtcbn1cbi5mb3JtYXRTb3J0TGFiZWwge1xuICBwYWRkaW5nOiA0cHggMTFweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi50cmFzYWN0aW9uSW1nIHtcbiAgaGVpZ2h0OiAzNnB4O1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbn1cbi5idG4tZ3JvdXAgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2FkYThhODtcbiAgcGFkZGluZzogNHB4IDExcHg7IC8qIFNvbWUgcGFkZGluZyAqL1xuICBjdXJzb3I6IHBvaW50ZXI7IC8qIFBvaW50ZXIvaGFuZCBpY29uICovXG4gIGZsb2F0OiBsZWZ0OyAvKiBGbG9hdCB0aGUgYnV0dG9ucyBzaWRlIGJ5IHNpZGUgKi9cbn1cblxuLmJ0bi1ncm91cCBidXR0b246bm90KDpsYXN0LWNoaWxkKSB7XG4gIGJvcmRlci1yaWdodDogbm9uZTsgLyogUHJldmVudCBkb3VibGUgYm9yZGVycyAqL1xufVxuXG4vKiBDbGVhciBmbG9hdHMgKGNsZWFyZml4IGhhY2spICovXG4uYnRuLWdyb3VwOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY2xlYXI6IGJvdGg7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWRhOGE4O1xufVxuXG4vKiBBZGQgYSBiYWNrZ3JvdW5kIGNvbG9yIG9uIGhvdmVyICovXG4uYnRuLWdyb3VwIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGVlZjE7XG59XG4uY2xlYXJGaWx0ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLnJvd0Zvcm1hdCB7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZDtcbn1cblxuXG51bCB7XG4gIG1hcmdpbjogMCAxNXB4O1xuICBib3JkZXItdG9wOiAycHggc29saWQgI0NBQ0FDQTtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI0NBQ0FDQTtcbiAgcGFkZGluZy1sZWZ0OiAwJTtcbn1cbmxpIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xufVxubGkgc3BhbiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNDQUNBQ0E7XG59XG5cbnVsIGxpIC5iYXIge1xuICB3aWR0aDogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxudWwgbGkgLmRhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG51bCBsaSAuYW1vdW50IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbnVsIGxpIC50cmFuc2FjdGlvblR5cGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxudWwgbGkgLmFtb3VudCxcbnVsIGxpIHNwYW4gcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbnVsIGxpIHNwYW4gcCBzdHJvbmcge1xuICBsaW5lLWhlaWdodDogIDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG51bCBsaSAuYW1vdW50IHtcbiAgd2lkdGg6IDI1JTtcbn1cbnVsIGxpIC5kYXRlIHtcbiAgd2lkdGg6IDEyJTtcbn1cbi5maWx0ZXJEaXZ7XG4gIG1hcmdpbi1sZWZ0OiAxJTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecentTransactionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recent-transactions',
                templateUrl: './recent-transactions.component.html',
                styleUrls: ['./recent-transactions.component.scss']
            }]
    }], function () { return [{ type: _shared_services_transferService__WEBPACK_IMPORTED_MODULE_1__["TransactionService"] }]; }, { transactionData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "qqWu":
/*!***************************************************************************!*\
  !*** ./src/app/bb-ui/components/submit-button/submit-button.component.ts ***!
  \***************************************************************************/
/*! exports provided: SubmitButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitButtonComponent", function() { return SubmitButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SubmitButtonComponent {
    constructor() {
        this.submitForm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    triggerSubmit(event) {
        this.submitForm.emit(event);
    }
}
SubmitButtonComponent.ɵfac = function SubmitButtonComponent_Factory(t) { return new (t || SubmitButtonComponent)(); };
SubmitButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubmitButtonComponent, selectors: [["app-submit-button"]], outputs: { submitForm: "submitForm" }, decls: 2, vars: 0, consts: [["data-test-hook", "submitButton", "type", "submit", 1, "btn", "btn-primary", "js-trigger-form", 3, "click"]], template: function SubmitButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubmitButtonComponent_Template_button_click_0_listener($event) { return ctx.triggerSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JiLXVpL2NvbXBvbmVudHMvc3VibWl0LWJ1dHRvbi9zdWJtaXQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubmitButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-submit-button',
                templateUrl: './submit-button.component.html',
                styleUrls: ['./submit-button.component.scss']
            }]
    }], null, { submitForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
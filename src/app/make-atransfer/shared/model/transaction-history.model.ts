// export interface TransactionHistory {
//     categoryCode: string;
//     dates: Dates;
//     transaction: Transaction;
//     merchant: Merchant;
// }

// export interface Dates {
//     valueDate: any;
// }

// export interface AmountCurrency {
//     amount: any;
//     currencyCode: string;
// }

// export interface Transaction {
//     amountCurrency: AmountCurrency;
//     type: string;
//     creditDebitIndicator: string;
// }

// export interface Merchant {
//     name: string;
//     accountNumber: string;
// }


export interface Merchant {
    name: string;
    accountNumber: string;
}

export interface Dates {
    valueDate: any;
}

export interface AmountCurrency {
    currencyCode: string;
    amount: any;
}

export interface Transaction {
    type: string;
    creditDebitIndicator: string;
    amountCurrency: AmountCurrency;
}

export interface TransactionHistory {
    merchant: Merchant;
    dates: Dates;
    categoryCode: string;
    transaction: Transaction;
}




export let tData: TransactionHistory = {
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
export let headerName = 'Make Transfer';
export let fAmount = 1500;
export let fText = 'My Personal Account: $';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators'
import { TransactionHistory } from '../model/transaction-history.model';

@Injectable({
    providedIn: 'root',
})
export class TransactionService {

    constructor(private _http: HttpClient) { }

    get(): Observable<TransactionHistory[]> {
        return this._http.get('assets/transactions.json')
            .pipe(
                map((response) => {
                    return JSON.parse(JSON.stringify(response));
                })
            );
    }
}

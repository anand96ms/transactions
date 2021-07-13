# TechnicalAssignment

 - This project was generated with [Angular CLI](https://github.com/angular/angular-cli) `version 10.1.2`.
 - The application is `responsive`. Boootstrap is used as CSS framework.
 - Font for the UI Design are used from font Awesome: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css`.

## Code setup

 - Clone/download the project from this git repository - `https://github.com/anand96ms/fund-transfer.git`
 - Run `npm install`

## Development server

 - Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

 ## Running unit tests

 - Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
 - To check the test coverage of the project code- run `ng test --codeCoverage=true`  - go to - `coverage/index.html`

## Application structure
 - This application consists of angular components used in parent child relationship.
 - src folder contains the main code.
 - src/main.ts - bootstraps the AppModule.
 - src/index.html - loads the AppComponent.
 - AppComponent loads MakeATransferModule.
 - MakeATransferModule has MakeATransferComponent and RecentTransactionsComponent.
 - MakeATransferComponent loads RecentTransactionsComponent.
 - RecentTransactionsComponent uses services from TransactionService
 - Assets are present at - src/assets.
 - Mock data is present at src/mock.
 - Shared respources are available at - src/app/shared.
 - The workspace configuration in available in angular.json.
 - package.json contains the installed dependencies.

## Hosting information

 - This application is hosted at `https://anand96ms.github.io/transactions/`.

# ps-xt-ui

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Demo

Link to view the demo https://ps-xt-ui.herokuapp.com

## Steps to run

- npm install
- ng serve
- Access http://localhost:4200

## Steps to build and deploy

- npm heroku-postbuild
- npm start

## Steps to unit test

- npm test
- ng test --code-coverage

## Lighthouse report

![alt text](https://github.com/bikash-b/ps-xt-ui/blob/master/src/assets/images/light-house.PNG)

## Code coverage report

![alt text](https://github.com/bikash-b/ps-xt-ui/blob/master/src/assets/images/code-coverage.PNG)

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Components API

This API has following three reusable components

- FilterComponent
- FilterOptionsComponent
- ProgramComponent

### FilterComponent

- Input - filterOptions
- Output - onSelect
- Selector - xt-filter

### FilterOptionsComponent

- Input - filterInfo
- Output - onSelect
- Selector - xt-filter-options

### ProgramComponent

- Input - program
- Output - NA
- Selector - xt-program

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

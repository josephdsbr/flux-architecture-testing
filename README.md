<h1 align="center">FluxArchitectureTest</h1>

<p align="center">This project was developed to show how can we use the Flux Architecture with NGRX library in Angular.</p>

<h2>What is Flux?</h2>

[Flux](https://facebook.github.io/flux/) is an application architecture developed by Facebook to use it on [ReactJS](https://pt-br.reactjs.org/). In the case of Facebook's framework, we could use the [Redux](https://redux.js.org/) library. In-depth, it has based on the Observer Pattern. Flux is for State Management in client-side projects.

In our case, you are going to explore the [NgRx library](https://ngrx.io/), which has based on Redux, but at the same time, it encourages the use of the Reactive Paradigm using the [RxJS library](https://rxjs-dev.firebaseapp.com/).

In general, NgRx and Redux have much more features than Flux suggested at its beginning. But we are going to focus on the basic structures such as dispatchers, actions, views, reducers, and stores.

## Structure

<div align="center">
  <img style="margin: 0 15px !important" src="./github/images/redux-architecture-overview-middleware.png" alt="flux-architecture" height="425" />
</div>

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

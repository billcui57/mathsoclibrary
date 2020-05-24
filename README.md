# mathsoclibrary-frontend
This is an angular app for the frontend of the textbook library's website.

Everything is containerized in this angular app. For example, to access the html/css of the header just go to src/app/header
To access the code that allows for the app to communicate with backend and retrieve info from database, refer to src/app/backend and see the .service.ts files (note the .ts.spec files are for testing)

The login system works by using Okta Authentication, hopefully we can switch over to authentication with Waterloo's own system instead!



## Getting access to the development tools
Login info for all development tools are in accounts.txt

src/app/backend contains the code for the automatic email notification function as well as a nice tool that you can use to import
csv directly into firestore for easy mass transfer. (MAKE SURE TO REMOVE THE "catalogue" CATAGORY FIRST)

## Setting up for development
Change redirectUri in oktaConfig in app.module.ts to be http://localhost:4200/callback . REMEMBER to change it back when you're deploying

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

# mathsoclibrary-frontend
This is an angular app for the frontend of the textbook library's website.

Everything is containerized in this angular app. For example, to access the html/css of the header just go to src/app/header
To access the code that allows for the app to communicate with backend and retrieve info from database, refer to src/app/services and see the .service.ts files (note the .ts.spec files are for testing)

The login system works by using Okta Authentication, hopefully we can switch over to authentication with Waterloo's own system instead!


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


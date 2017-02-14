#GoogleSheets API - Animals

The GoogleSheets API is a remarkably strong development tool for simple side
projects.

This simple demo includes a GET and POST request to `/animals`, which syncs with
the rows and columns of a Google Sheet.

#See it in action
##Basics
1. Clone down the repository (assuming you have [Node](https://docs.npmjs.com/getting-started/installing-node) installed)

##Google developers console
3. At https://console.developers.google.com/ create a new project
4. Under `credentials` create a service account key with the default credentials in JSON format
5. Rename the generated `animals-.json` file `credentials.json` and place it at this project's root
6. In the Google developers console's library tab, enable the SheetsAPI

##GoogleSheet
7. Create a google spreadsheet called `animals`
8. Input a few rows of data similar to [this sheet](https://docs.google.com/a/gobloom.io/spreadsheets/d/1onP9sfOvYLARGUyaezIl0asfawZzq7pzJDFXEIl_8GQ/edit?usp=sharing)
9. Name the sheet `animals` (bottom left hand corner)
10. Select columns A and B and create a Named Range (under Data) named `all`
11. Share the GoogleSheet with the `client_email` included in the `credentials.json` file

##index.js
12. Replace `const spreadsheetId` with the proper string borrowed from your sheet's URL

##Test is out!
13. From the command line run node index.js
14. Visit http://localhost:4000/animals
15. Using a tool like [Postman](https://www.getpostman.com/):
* [send a `GET` request](/sample/GET_request.png) to http://localhost:4000/animals and see it return JSON data
* [send a `POST` request](/sample/POST_request.png) to http://localhost:4000/animals and see it update the sheet's contents

***
Demo first seen on EggHead.io [here](https://egghead.io/lessons/node-js-use-google-sheets-with-node-and-express-in-fun-side-projects)

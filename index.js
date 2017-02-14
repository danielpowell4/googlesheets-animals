const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const google = require('googleapis')
const credentials = require('./credentials.json')

const auth = new google.auth.JWT(
  credentials.client_email,
  null,
  credentials.private_key,
  [
    'https://www.googleapis.com/auth/spreadsheets'
  ],
  null
)

google.options({auth})

const sheets = google.sheets('v4')
const spreadsheetId = '1onP9sfOvYLARGUyaezIl0asfawZzq7pzJDFXEIl_8GQ' // from URL

// Hello world style root
app.get('/', (req, res) => {
  res.send('Hello')
})

// Append values to spreadsheet
app.post('/animals', (req, res) => {
  sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'animals!all', // sheet_name!named_range
    valueInputOption: 'USER_ENTERED',
    includeValuesInResponse: true,
    resource: {
      values: [[req.body.name, req.body.count]]
    }
  }, (err, response) => {
    res.send(response.updates)
  })
})

// Get values from spreadsheet
app.get('/animals', (req, res) => {
  sheets.spreadsheets.values.get({
    spreadsheetId,
    range: 'animals!all' // sheet_name!named_range
  }, (err, response) => {
    res.send(response.values.map(([name, count]) => ({ name, count })))
  })
})

// runs on port 4000 (http://localhost:4000)
app.listen(4000)

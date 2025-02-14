// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
const cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.set('trust proxy', true);

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// Who am I
app.get("/api/whoami", function (req, res) {
  // console.log('accept-language', req.headers['accept-language']);
  // console.log('user-agent', req.headers['user-agent']);
  // console.log('x-forwarded-for', req.headers['x-forwarded-for']);
  // console.log('headers', req.headers);
  // console.log('ip', req.ip);
  // console.log(req.headers['x-forwarded-for'].split(",")[0]);
  res.json({"ipaddress": req.ip, "language": req.headers['accept-language'], "software": req.headers['user-agent']});
});

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', function(req, res) {
  var hostname = process.env.HOSTNAME || 'localhost';
  var nodeVersion = process.version;
  var env = process.env.NODE_ENV || 'development';

  res.send(
    '<!DOCTYPE html>' +
    '<html>' +
    '<head>' +
    '<title>Mon App OpenShift</title>' +
    '<style>' +
    'body { font-family: Arial, sans-serif; text-align: center; padding: 50px;' +
    'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);' +
    'color: white; min-height: 100vh; margin: 0; }' +
    'h1 { font-size: 2.5em; }' +
    '.card { background: rgba(255,255,255,0.15); padding: 30px;' +
    'border-radius: 15px; margin: 20px auto; max-width: 500px; }' +
    '.badge { background: rgba(255,255,255,0.3); padding: 5px 15px;' +
    'border-radius: 20px; margin: 5px; display: inline-block; }' +
    '</style>' +
    '</head>' +
    '<body>' +
    '<h1>🚀 Mon Application OpenShift</h1>' +
    '<div class="card">' +
    '<p><span class="badge">🖥️ Pod: ' + hostname + '</span></p>' +
    '<p><span class="badge">⚙️ Node: ' + nodeVersion + '</span></p>' +
    '<p><span class="badge">🌍 Env: ' + env + '</span></p>' +
    '</div>' +
    '<p>✅ Deploye avec S2I - TP3 Reussi !</p>' +
    '</body>' +
    '</html>'
  );
});

app.get('/health', function(req, res) {
  res.json({
    status: 'OK',
    pod: process.env.HOSTNAME,
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, function() {
  console.log('Server running on port ' + PORT);
});

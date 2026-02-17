const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Mon App OpenShift</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          padding: 50px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        h1 { font-size: 3em; }
        .info { 
          background: rgba(255,255,255,0.1);
          padding: 20px;
          border-radius: 10px;
          margin: 20px auto;
          max-width: 600px;
        }
      </style>
    </head>
    <body>
      <h1>🚀 Mon Application OpenShift</h1>
      <div class="info">
        <p><strong>Hostname:</strong> ${process.env.HOSTNAME || 'localhost'}</p>
        <p><strong>Version:</strong> 1.0.0</p>
        <p><strong>Environment:</strong> ${process.env.NODE_ENV || 'development'}</p>
      </div>
      <p>✅ Déployée avec Source-to-Image (S2I)</p>
    </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});

const express = require('express');

import config from './config';

async function startServer() {
  const app = express();

  await require('./loaders').default({ expressApp: app });

  app.listen(config.port, '0.0.0.0', error => {
    if (error) {
      console.log(error);
      process.exit(1);
    }

    console.log(`Running on port ${config.port}`);
  });
}

startServer();

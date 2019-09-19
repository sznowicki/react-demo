const app = require('express')();
const getFileContent = require('./server/getFileContent');

const server = () => {
  app.use((req, res) => {
    const { path } = req;
    const content = getFileContent(path);

    if (!content) {
      res.status(404).send();
      return;
    }
    res.status(200).send(content);
  });

  app.listen('8001', () => {
    console.log('App is ready on http://localhost:8001');
  });
};

server();

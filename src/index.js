const { app } = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  // eslint-disable-next-line global-require
  console.log(`Example app listening at http://localhost:${port}`);
});

const app = require('./app');

const port = 3000;
app.listen(port, '0.0.0.0', () => {
  // small comment
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${port}`);
});

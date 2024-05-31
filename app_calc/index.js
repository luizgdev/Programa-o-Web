const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const calculadoraRoutes = require('./src/routes/calculadoraRoutes');

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', calculadoraRoutes);

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});

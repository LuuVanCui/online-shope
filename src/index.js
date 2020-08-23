const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');

const route = require('../src/routes/index');

const app = express();
const port = 3000;

// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));


// Use static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Router init
route(app);

app.listen(port, () => {
    console.log(`Online Shope is listening on port ${port}`);
})
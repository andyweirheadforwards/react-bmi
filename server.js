/* eslint-disable @typescript-eslint/no-var-requires */
const express    = require('express');
const path       = require('path');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json();

// Create and configure the express server:
const app = express();
app.set('json spaces', 2);

// Configure express to serve the webapp:
app.use(express.static(path.join(__dirname, 'build')));
app.use((request, response, next) => setTimeout(next, 1000));

app.post('/bmi', jsonParser, (request, response) => {
    const { body } = request || {};

    const bmi    = getBmi(body);
    const status = bmi ? 200 : 500;

    response.status(status);
    response.json({ bmi });
});

app.listen(process.env.PORT || 8080);

function getBmi ({ height, weight }) {

    if (!height) {
        return null;
    }

    const bmi = weight / height / height;

    return parseFloat(bmi.toFixed(2));
}

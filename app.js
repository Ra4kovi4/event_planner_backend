const express = require('express');
const app = express();
require('dotenv').config();

const logger = require('morgan');
const cors = require('cors');

const { eventsRouter } = require('./routes');

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api/events', eventsRouter);

app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
    const { status = '500', message = 'Server error' } = err;
    res.status(status).json({
        message,
    });
});

module.exports = app;

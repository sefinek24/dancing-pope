require('dotenv').config();

const express = require('express');
const { hidePoweredBy } = require('helmet');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const { join } = require('node:path');

const app = express();
app.use(hidePoweredBy());
app.use(favicon('./public/image/favicon.png'));
app.use(express.static('./public'));
app.use(morgan(':method :url [:status] :response-time ms - :user-agent'));


app.get('*', (req, res) => {
	res.sendFile(join(__dirname + '/html/index.html'));
});


app.listen(process.env.PORT, () => {
	console.log(`App listening on port ${process.env.PORT}, http://127.0.0.1:${process.env.PORT}`);
});
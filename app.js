const express = require('express');
const expressLayouts = require('express-layouts')



const indexRouter = require('./routes/index');

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

const mongoose = require('mongoose');
mongoose.connect(process.env.DBURI1, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', () => console.log('Connected to Mongodb'))


app.use('/', indexRouter);

app.listen (process.env.PORT || 3000);


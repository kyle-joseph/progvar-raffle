const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

const key = require('./raffle/config/key').MongoURI;

// Init mongo connection
mongoose.connect(key,{useUnifiedTopology:true,useNewUrlParser:true})
    .then(()=>console.log('Database Connected'))
    .catch(err=>console.log(err));

app.use(bodyParser.json());
app.use(cors());

app.use('/',require('./raffle/routes/api/add-contestant'));
app.use('/',require('./raffle/routes/api/get-contestant'));
app.use('/',require('./raffle/routes/api/delete-contestant'))
app.use('/',require('./raffle/routes/api/change-status'));

// Email
app.use('/api',require('./email/routes/api/send-email'));


app.listen(PORT,console.log(`Server at PORT ${PORT}`));
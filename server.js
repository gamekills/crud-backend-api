const express = require('express');
const app = express();
const cors = require('cors');
const route = require('./routes/route');

const app_port=8080;

// Tell Express to use EJS as the template engine
app.set('view engine', 'ejs');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api',route);

app.get('/api',(req,res)=>{
    return res.status(200).send('Welcome');
});

app.listen(app_port,()=>{
    console.log(`listening on ${app_port}`);
});


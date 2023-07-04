const express = require('express');
const app = express();
const port = process.env.PORT || 4600;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/datadb', {useNewUrlParser:true, useUnifiedTopology: true})
    .then(()=> console.log(`[DATABASE] Connected to MongoDB`))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send("COUCOU")
})
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api', require('./routes/basicRoute'));
app.use('/api/foodtrucks', require('./routes/foodtruckRoute'))

app.listen(port, () => console.log(`[SERVER] is running on port ${port}`))
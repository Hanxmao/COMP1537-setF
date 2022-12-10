const express = require('express');
const app = express();

app.listen(8080, (err) => {
  if (err) console.log(err);
  console.log('Server is running on port 8080');
});

app.get('/', (req, res) => {
  res.send('Hello World');
});


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test',
  { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) console.log(err);
    console.log('Connected to database');
  });

const unicornsSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  loves: [String],
  weight: Number,
  gender: {
    type: String,
    enum: ['m', 'f']
  },
  vampires: Number,
  vaccinated: Boolean
});

const unicornModel = mongoose.model('unicorns', unicornsSchema);

// app.get('', (req, res)=>{
//     if(err) console.log(err);
// })


app.get('/unicorns', (req, res) => {
    unicornModel.find({"gender": "f"}, (err, data) => {
        if (err) console.log(err);
        res.send(data);
    });
});

app.use(express.urlencoded())
app.use(express.json())

app.post('/getUnicornByNameRoute', (req, res)=>{
  unicornModel.find({name: req.body.unicornNameReq}, (err, data)=>{
    if(err) console.log(err);
    res.send(data)
  })
})

app.post('/getUnicornByWeightRoute', (req, res)=>{
  let lowerWeight = Number(req.body.lowerWeight)
  let higherWeight = Number(req.body.higherWeight)
  unicornModel.find({weight: {$gte: lowerWeight, $lte: higherWeight}}, (err, data)=>{
    if(err) console.log(err);
    res.send(data)
  })
})

app.post('/getUnicornByFoodRoute', (req, res)=>{
  let foods = req.body.foodCheck.filter(x => x != "none")
  if (foods.length == 1){
    unicornModel.find({loves: foods[0]}, (err, data)=>{
      if(err) console.log(err);
      res.send(data)
      
    })
  }
  else if(foods.length == 2){
    unicornModel.find({$and: [{loves: foods[0]}, {loves: foods[1]}]}, (err, data)=>{
      if(err) console.log(err);
      res.send(data)
    })
  }
})




//use this directory as static assets
app.use(express.static('./public'))
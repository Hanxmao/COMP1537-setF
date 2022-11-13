// const express = require('express')
// const app = express()

// app.listen(5000)

// app.get('/',(req,res)=>{
//     console.log('Hello world!')
//     res.send('<h1>Hello world!</h1>')
// })

const express = require('express');
const app = express();




// Hello World Route
app.get('/', (req, res) => {
  console.log('Hello World');
  res.send('<h1>Hello World</h1>');
})



app.listen(5050, ()=>{
    console.log('Listening on 5050')
}) // listen on port 5000
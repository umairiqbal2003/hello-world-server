import express from 'express';

import cors from 'cors';

const app = express();

app.use(cors());


app.get('/home', (req, res) => {
  res.send('Hello I am homepage!')
})
app.get('/profilr', (req, res) => {
    res.send('Hello I am Profile Page!')
  })

  app.get('/weather', (req, res) => {
    res.send({
      city : "karachi" , 
      temperature : "28",
      condition  : "Rainy System Enters",
      localtime : "09-03-2022",
      country  : "Pakistan",
      developer : "Made By Umair and taught by Sir Inzemam Malik"
    },{
        city : "london" , 
        temperature : "23",
        condition : "Cloudy",
        localtime : "09-03-2022 12:00 AM",
        country  : "Pakistan",
      developer : "Made By Umair taught by Sir Inzemam Malik"

      }
      ,{
        city : "turkey" , 
        temperature : "24",
        condition : "Partialy Cloudy",
        localtime : "09-03-2022 9:00 PM",
        country  : "Pakistan",
      developer : "Made By Umair and taught by Sir Inzemam Malik"

      })
  })

 const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
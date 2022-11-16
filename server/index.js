const express =  require('express');
const { reset } = require('nodemon');
const  cors = require('cors')
const  http = require('http')
require("./config/database").connect()
const app = express();
const bodyParser = require('body-parser')
const database = require('./model/data')
const checkValidity = require('./middlewares/checkValidity')

app.use(express.static(__dirname))
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({extended: true})); //Parse URL-encoded bodies
app.use(cors({
  credentials: true,
  origin: ['http://127.0.0.1:5500',"https://black-worm-v2.vercel.app","https://black-worm-v2-950hi9qfm-excalibur-knob.vercel.app","https://black-worm-v2-ovvadjw6g-excalibur-knob.vercel.app"],
  default:"http://127.0.0.1:5500"
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/search" ,checkValidity, async (req, res,next) => {
    console.log('Form request:', req.body)
  })

app.listen(5000,()=>{
  
    console.log("listnening 5000")
})
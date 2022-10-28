 const { reset } = require('nodemon')
const database = require('../model/data')

 const checkValidity = async (req,res,next) => {
    const identifier = req.body.data.toLowerCase()
    const foundData = await database.findOne({identifier})
    console.log(foundData)
    if(foundData) {
        console.log("found " + foundData.title)
        const {identifier,title,date,text,valid} = foundData
        res.json({identifier,title,date,text,valid})
    }else{
       // res.json({message: 'not found'})
        res.status(404).send({message: 'not found'})   
        console.log("not found")
    }
  //  console.log(foundData)
    return next()
 }

 module.exports = checkValidity;
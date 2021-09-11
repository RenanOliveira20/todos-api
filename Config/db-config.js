const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017/todo' 

const connect = async () =>{
  await mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } )
  .then((result)=>{
      console.log(`Successfuly conected to db ${result.connections[0].name}`)
 })
}

module.exports = connect
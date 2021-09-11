const {Schema, model} = require('mongoose')

const todo = new Schema ({
    title : String,
    completed : {type: Boolean, default: false}
},
    {timestamps: true} 
)

const Todo = model("Todo", todo)

module.exports = Todo
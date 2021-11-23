const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Top5ListSchema = new Schema(
    {
        commentor:{type:String,required: true},
        theComment:{type:String,required: true}
    },
    { timestamps: true },
)


module.exports = mongoose.model('Top5List', Top5ListSchema)
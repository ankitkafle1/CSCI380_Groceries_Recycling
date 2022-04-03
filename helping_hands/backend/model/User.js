const mongoose = require('mongoose')

const userSchema =  mongoose.Schema ({
    firstname: {
        type: String,
        required:true
    },
    lastname: {
        type: String,
        required:true
    },
    userstory:{
        type: String,
        required:true
    },
    posttime:{
        type:Date,
        default:Date.now,
    }
})

module.exports = mongoose.model('Users',userSchema)
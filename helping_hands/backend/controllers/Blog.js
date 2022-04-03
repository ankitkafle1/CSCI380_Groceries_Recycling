import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type:String
    },
    author:{
        type:String
    },
    body:{
        type:String
    }
});

module.exports = mongoose.model('Blog',blogSchema)
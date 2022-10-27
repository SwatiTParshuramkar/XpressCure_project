const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    address:[
        {
        city:{
            type:String,
            required:true
            },
        state:{
            type:String,
            required:true
        },
        country:{
            type:String,
            required:true
        },
    },
],
});

module.exports = mongoose.model('profile',ProfileSchema);
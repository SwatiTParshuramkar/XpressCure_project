const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },  
  date: {
    type: Date,
    default: Date.now
  },
  phonenumber:{
    type:Number,
    require:true,
    unique:true
  }
  
});

module.exports = mongoose.model('user', UserSchema);
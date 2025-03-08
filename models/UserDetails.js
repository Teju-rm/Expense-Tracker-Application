const mongoose = require('mongoose');

const UserDetailsSchema = new mongoose.Schema({
  name: String,
  email: String,
  profession: String,
  phone: String,
  address: String,
  age: Number,
  
});

module.exports = mongoose.model('UserDetails', UserDetailsSchema);

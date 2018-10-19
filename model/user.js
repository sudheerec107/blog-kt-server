const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },
  created_on: { type: Date }
});
 
const User = mongoose.model('User', userSchema);
 
module.exports = User;

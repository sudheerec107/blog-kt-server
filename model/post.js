const mongoose = require('mongoose');
const schema = mongoose.Schema;
const postSchema = new schema({
    title: { type: String, required: true, unique: true },
    body: { type: String, required: true },
    creaded_on:  { type: Date },
    update_on: { type: Date }
});

postSchema.pre('save', function(next) {
    
    console.log('val on pre >', this);
    if (!this.creaded_on) {
        this.creaded_on = new Date();
    }
    this.update_on = new Date();
    next();
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
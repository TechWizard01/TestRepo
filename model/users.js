const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    team:{
        type: Number,
        required: true
    }
});

module.exports = User = new mongoose.model('User', userSchema);
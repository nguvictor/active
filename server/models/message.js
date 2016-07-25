var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
    text: String,
    username: String,
    created_at: {type: Date, default: Date.now}
});

mongoose.model('Message',messageSchema);

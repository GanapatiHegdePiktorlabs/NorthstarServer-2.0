const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ChatSchema = new Schema({
    userId : { type : String, require : true },
    message:{ type:String,require:true },
    mediaType: { type: String, enum: ['camera', 'file'] },
    mediaName: { type: String },
    mediaLink: { type: String }
});

module.exports = mongoose.model('Chats', ChatSchema);
import mongoose from 'mongoose';

//Data structure in DB
const postSchema = mongoose.Schema({
title: String,
message: String,
creator: String,
tags: {
    type:Number,
    default: 0
},
createAt: {
    type: Date,
    default: new Date()
    },
});

const PostMessage= mongoose.model('PostMessage', postSchema);

//Page export
export default PostMessage;

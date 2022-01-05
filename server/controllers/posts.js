 import PostMessage from "../models/postsMessage.js";
//get Method
 export const getPosts =async  (req, res) => {
     try {
            const postMessage = await PostMessage.find();
            console.log(postMessage)

            res.status(200).json(postMessage)
     }catch(error) {
        res.status(404).json({message: message.error});
     }
};

//Post Method
export const createPost =async (req, res) => {
    const post = req.body;
    const  newPost = new PostMessage(post);
    try {
        await newPost.save()
        //Http code link
        res.status(201).json(newPost);
    }catch(error) {
        //Http code link
        res.status(409).json({message:error.message});
    }
};
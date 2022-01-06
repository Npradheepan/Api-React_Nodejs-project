import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;


// import express from 'express';
// import {getPosts, createPost} from '../controllers/posts.js';

// //Local router Veriable
// const router =  express.Router();

// //Page Routting
// router.get('/', getPosts);
// router.post('/', createPost);

// // routting export
// export default router;
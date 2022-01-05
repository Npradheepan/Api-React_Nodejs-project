import express from 'express';
import {getPosts, createPost} from '../controllers/posts.js';

//Local router Veriable
const router =  express.Router();

//Page Routting
router.get('/', getPosts);
router.post('/', createPost);

// routting export
export default router;
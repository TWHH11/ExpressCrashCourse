import express from 'express'
import{ updatePost } from '../controller/postController'

const router = express.Router()



//Get All Post
router.get('/', getPosts )

//Get A single Post
router.get('/:id',getPost)

  //Create new post
  router.post('/', createPost)

  //Update Post
  router.put('/:id', updatePost);

  //Delete Post
  router.delete('/:id',);

export default router;
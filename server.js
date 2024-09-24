const express = require("express")
const app = express()
const path = require('path')
const port = process.env.PORT|| 8000;

// setup static folder
// app.use(express.static(path.join(__dirname,'public')))

let posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
    {id: 3, title: 'Post Three'},
]

//Get All Post
app.get('/api/posts', (req,res)=>{
  res.json(posts);
})

//Get A single Post
app.get('/api/posts/:id', (req,res)=>{
   
   const id = parseInt(req.params.id);

    res.json(posts.filter((post)=> post.id ===id ) )

  })

app.listen(port, ()=> console.log(`server is running on ${port}`))
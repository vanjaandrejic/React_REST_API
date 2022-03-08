import React from 'react'
import { Link } from 'react-router-dom'

export default function Posts({ posts }) {

  var postsShow = posts.map((post) => 
  <div key={post.id} className="post-cont">
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    <Link to={`/posts/${post.id}`}>Read More</Link>
  </div>
  )

  return (
    <>
      {postsShow}
    </>
  )
}

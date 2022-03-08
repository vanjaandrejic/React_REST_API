import React from 'react'

export default function Posts({ posts }) {

  var postsShow = posts.map((post) => 
  <div key={post.id} className="post-cont">
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    <a href='/post'>Read More</a>
  </div>
  )

  return (
    <>
      {postsShow}
    </>
  )
}

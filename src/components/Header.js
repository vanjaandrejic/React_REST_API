import React from 'react'

export default function Header({ posts }) {

  const numPosts = posts.length;

  return (
    <header>
        <h1>Posts Found: { numPosts }</h1>
    </header>
  )
}


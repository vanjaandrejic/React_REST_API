import React from 'react'
import { useState, useEffect } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import Posts from './components/Posts'
import Post from './components/Post'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


export default function App() {

  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])


  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setPosts(data);
      setFilteredPosts(data);
    }
    fetchPosts();
  }, [])

  const search = (inputHandle) => {
    console.log(filteredPosts)
    setFilteredPosts(posts.filter(post => {
      if (inputHandle === "") {
        return post
      } else if (post.title.toLowerCase().includes(inputHandle.toLowerCase())) {
        return post
      } 
    }))
  }

  return (
    <Router>

    <Routes>

    <Route exact path="/" element={<>

            <Header posts={ filteredPosts }/>
            <div className='container'>
              <Form search={search} />
              <div className='container-posts'>
            <Posts posts={ filteredPosts } />
            </div>
            </div>
            </>}/>

        <Route path='/posts:id' element={<Post/>} />

        </Routes>
        
    </Router>
  )
}




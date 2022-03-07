import React from 'react'
import { useState, useEffect } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import Posts from './components/Posts'
import Post from './components/Post'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


export default function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setPosts(data);
      console.log(data);
    }
    fetchPosts();
  }, [])


  return (
    <Router>

    <Routes>

    <Route exact path="/" element={<>

            <Header posts={ posts }/>
            <div>
              <Form/>
            <Posts posts={ posts } />
            </div>
            </>}/>

        <Route path='/post' element={<Post/>} />

        </Routes>
        
    </Router>
  )
}




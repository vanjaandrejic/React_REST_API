import React from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Posts from './components/Posts'
import Post from './components/Post'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


export default function App() {
  return (
    <Router>

    <Routes>
      
    <Route exact path="/" element={<>

            <Header/>
            <div>
              <Form/>
            <Posts/>
            </div>
            </>}/>

        <Route path='/post' element={<Post/>} />

        </Routes>
        
    </Router>
  )
}




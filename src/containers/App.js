import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import List from './List'
import About from './About'

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/list'>List</Link></li>
      </ul>

      <hr />

      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/list' component={List} />
    </div>
  </BrowserRouter>
)

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to ようこそ</p>
  </div>
)

export default App

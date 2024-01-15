import React from 'react'
import Newsmap from './components/newsmap'
import './App.css'
const App = () => {
  return (
    <div className='home'>
      <nav>
        <ul>
          <li><span className='sp'>Home</span></li>
          <li>Business</li>
          <li>Entertainment</li>
          <li>General</li>
          <li>Health</li>
          <li>Science</li>
          <li>Sports</li>
          <li>Technology</li>


        </ul>
      </nav>
        <Newsmap/>
        <div className="numbers">
          <h4 className='h'>1</h4>
          <h4>2</h4>
          <h4>3</h4>
          <h4>4</h4>
          <h4>5</h4>
          <img src="images/right.png" alt="" />

        </div>
    </div>
  )
}

export default App

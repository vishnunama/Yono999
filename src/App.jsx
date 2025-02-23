import React from 'react'
import Home from './Home'
import Header from './Header'
import Game from './Game'
import "./App.css"

function App() {
  return (
    <div style={{display:"flex", justifyContent:"center"}} className='app-container'>
      <div style={{width:"100%", maxWidth:"600px"}}>
      <Header/>
      <Home/>

   <div class="fixed-icons">
    <a href="https://t.me/yono9996" target="blank">
        <img src="tel.png" alt="Call" />
    </a>
    <a href="https://t.me/Yono994" target="blank">
        <img src="chat2.png" alt="Chat" />
    </a>
</div>


      
      
      </div>
    </div>
  )
}

export default App
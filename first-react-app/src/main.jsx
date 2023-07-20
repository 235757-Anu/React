import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Title from './components/Title'
import Introduction from './components/Intoduction'
import Features from './components/Features'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Title />
    <Introduction />
    <Features />
  </>
)

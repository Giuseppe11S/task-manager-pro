import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// import layout
import Layout from './Layout/Layout'
import TaskForm from './components/TaskForm'

function App() {
  

  return (
    <>
      <Layout/>
      <TaskForm/>
    </>
  )
}

export default App

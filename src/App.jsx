import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// import layout
import Layout from './Layout/Layout'
import TaskForm from './components/TaskForm'

// import pages
import TaskList from './pages/TaskList'

// import context | provider
import TaskProvider from './context/TaskContext'

function App() {
  

  return (
    <>
      <TaskProvider>
        <Layout/>
        <TaskList/>
      </TaskProvider>
    </>
  )
}

export default App

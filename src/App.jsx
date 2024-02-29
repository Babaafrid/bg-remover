import React from 'react'
import Navbar from './components/Navbar'
import RemoveBackground from './components/RemoveBackground'

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="h-screen">
      <RemoveBackground />
      </div>
    </div>
  )
}
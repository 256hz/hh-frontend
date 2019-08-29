import React from 'react';
import Sidebar from './Sidebar'
import Viewport from './Viewport'
import '../App.css';

export default function App() {
  return (
    <div className="App">
      <Sidebar />
      <Viewport />
    </div>
  )
}
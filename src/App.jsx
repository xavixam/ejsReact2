import { useState } from 'react'
import Counter from './components/Counter/Counter'
import './App.css'

function App() {
  return (
    <>
      <Counter initialValue={5} incNumber={1} decNumber={2}/>
    </>
  )
}

export default App

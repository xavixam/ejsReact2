import { useState } from 'react'
import Counter from './components/Counter/Counter'
import './App.css'

function App() {
  return (
    <>
      <Counter initialValue={0} incNumber={1} decNumber={2}/>
    </>
  )
}

export default App
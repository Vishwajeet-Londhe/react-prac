import React, { useRef } from 'react'

function App() {
  const name = useRef(null);
  const age = useRef(null);
  
  return (
    <form action="">
      <input ref={name} placeholder='name' type="text" />
      <input ref={age} placeholder='age' type="text" />
      <input type="submit" />
    </form>
  )
}

export default App
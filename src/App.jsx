import React, { useRef } from 'react'

function App() {
  const elem = useRef(null);
  return (
    <div>
      <div ref={elem} className='p-4'>
        <h1>hello</h1>
      </div>
    </div>
  )
}

export default App

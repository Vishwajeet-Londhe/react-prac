// import React, { useRef } from 'react'

// function App() {
//   const name = useRef(null);
//   const age = useRef(null);
//   const email = useRef(null);
  
//   const handleSubmit = (event)=>{
//     event.preventDefault();
//     console.log(name.current.value, age.current.value, email.current.value)
//   }

//   return (
//     <form action="" onSubmit={handleSubmit}>
//       <input ref={name} placeholder='name' type="text" />
//       <input ref={age} placeholder='age' type="text" />
//       <input ref={email} placeholder='email' type="text" />
//       <input type="submit" />
//     </form>
//   )
// }

// export default App

import React from 'react'
import { useState } from 'react'

function App() {
  const [val, setVal] = useState({name:""})
  
  return (
    <div>
      <form action="">
        <input onChange={(event)=>console.log(event.target.value)} type="text" placeholder='name' />
      </form>
    </div>
  )
}

export default App

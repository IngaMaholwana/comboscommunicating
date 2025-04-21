import { useState } from 'react'
import Login from './components/Login'

import './App.css'

function App() {
    const [id, setId] = useState()
    return( 
    <>
    
     <h1> {id} </h1>
     <Login onIdSubmit={setId} />
    </>
    

    )
}

export default App

import React from 'react'
import Login from './components/Login'
import useLocalStorage from './hooks/useLocalStorage'

import './App.css'

function App() {
    const [id, setId] = useLocalStorage('id')
    return( 
    <>
    
     {id ? <Dashboard />    : <Login onIdSubmit={setId} /> } 
     
    </>
    

    )
}

export default App

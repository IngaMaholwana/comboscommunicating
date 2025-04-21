import React from 'react'
import Login from './components/Login'
import useLocalStorage from './hooks/useLocalStorage'
import {ContactsProvider} from './contexts/ContactsProvider'
import Dashboard from './components/Dashboard'



function App() {
    const [id, setId] = useLocalStorage('id')
    
    const dashboard = (
        <ContactsProvider>
            <Dashboard id={id} />
        </ContactsProvider>
    )
    
    return( 
    
    
     id ? dashboard  : <Login onIdSubmit={setId} />  
     
    
    

    )
}

export default App

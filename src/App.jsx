import React from 'react'
import Login from './components/Login'
import useLocalStorage from './hooks/useLocalStorage'
import {ContactsProvider} from './contexts/ContactsProvider'
import Dashboard from './components/Dashboard'
import { ChatsProvider } from './contexts/ChatsProvider'
import { SocketProvider } from './contexts/SocketProvider'



function App() {
    const [id, setId] = useLocalStorage('id')
    
    const dashboard = (
        <SocketProvider id = {id}>
            <ContactsProvider>
                <ChatsProvider id={id}>
                    <Dashboard id={id} />
                </ChatsProvider>
            </ContactsProvider>
         </SocketProvider>
   
    )
    
    return( 
    
    
     id ? dashboard  : <Login onIdSubmit={setId} />  
     
    
    

    )
}

export default App

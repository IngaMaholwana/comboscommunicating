import React, {useContext} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const ChatsContext = React.createContext()

export function useContacts() {
  return useContext(ChatsContext)
}

export function ChatsProvider({children }) {

  const [chats, setChats] = useLocalStorage('chats',[])
  
  function createChat(recipients) {
    setChats(prevChats => {
      return [...prevChats, {recipients, messages : [] }]
    })
  }

  return (
    <ChatsContext.Provider value={{chats, createChat}}>
      {children}
    </ChatsContext.Provider>
  )
}

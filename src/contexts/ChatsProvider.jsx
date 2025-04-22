import React, {useContext} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { useContacts } from './ContactsProvider'

const ChatsContext = React.createContext()

export function useChats() {
  return useContext(ChatsContext)
}

export function ChatsProvider({children }) {

  const [chats, setChats] = useLocalStorage('chats',[])

  const { contacts } = useContacts()
  
  function createChat(recipients) {
    setChats(prevChats => {
      return [...prevChats, {recipients, messages : [] }]
    })
  }

  const formattedChats = chats.map(chat => {
    const recipients = chat.recipients.map(recipient => {
      const contact = contacts.find(contact => {
        return contact.id === recipient
      })
      const name = (contact && contact.name) || recipient
      return { id: recipient, name }
    })
    return { ...chat, recipients }
  })

  const value = {
    chats: formattedChats,
    createChat
  }

  return (
    <ChatsContext.Provider value={value}>
      {children}
    </ChatsContext.Provider>
  )
}

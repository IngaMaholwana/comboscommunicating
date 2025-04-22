import React, { useContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { useContacts } from './ContactsProvider'

const ChatsContext = React.createContext()

export function useChats() {
  return useContext(ChatsContext)
}

export function ChatsProvider({ children }) {

  const [chats, setChats] = useLocalStorage('chats',[])
  const [selectedChatIndex, setSelectedChatIndex] = useState(0)
  const { contacts } = useContacts()
  
  function createChat(recipients) {
    setChats(prevChats => {
      return [...prevChats, {recipients, messages : [] }]
    })
  }

  function addMessageToChat({recipients, text, sender }){
    
  }

  const formattedChats = chats.map((chat, index) => {
    const recipients = chat.recipients.map(recipient => {
      const contact = contacts.find(contact => {
        return contact.id === recipient
      })
      const name = (contact && contact.name) || recipient
      return { id: recipient, name }
    })
    const selected = index === selectedChatIndex
    return { ...chat, recipients, selected }
  })

  const value = {
    chats: formattedChats,
    selectedChat: formattedChats[selectedChatIndex],
    selectChatIndex: setSelectedChatIndex,
    createChat
  }

  return (
    <ChatsContext.Provider value={value}>
      {children}
    </ChatsContext.Provider>
  )
}

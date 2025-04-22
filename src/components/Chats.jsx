import React from 'react'
import { ListGroup } from 'react-bootstrap'
import {useChats} from '../contexts/ChatsProvider'

export default function Chats() {
  const { chats } = useChats()

  
  return (
    <ListGroup variant='flush'>
        { chats.map((chat,index ) => (
            <ListGroup.Item 
            key={index}
            
            >
                {chat.recipients.map(r => r.name).join(', ')}
            </ListGroup.Item>
        ))}

    </ListGroup>
  )
}

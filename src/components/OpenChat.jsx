import React, { useState } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'
import { useChats } from '../contexts/ChatsProvider'

export default function OpenChat() {
  const [text, setText ] = useState('')
  const {sendMessage, selectedChat } = useChats()
  function handleSubmit(e){
    e.preventDefault()

    sendMessage(selectedChat.recipients.map(recipient => recipient.id )
    , text)
    setText('')
  } 

  return (
    <div className='d-flex flex-column flex-grow-1'>
      <div className='flex-grow-1 overflow-auto'>


      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='m-2' >
          <InputGroup>
          <Form.Control 
          as="textarea" 
          required 
          value={text} 
          onChange={e => setText(e.target.value)}
          style={{height : '75px', resize: 'none '}}
          />
          <Button type="submit" variant="success">Send</Button>
          </InputGroup>
        </Form.Group>
      </Form>

      
    </div>
  )
}

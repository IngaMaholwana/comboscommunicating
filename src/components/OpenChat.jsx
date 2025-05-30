import React, { useState, useCallback } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'
import { useChats } from '../contexts/ChatsProvider'

export default function OpenChat() {
  const [text, setText] = useState('') 
  const setRef = useCallback(node => {
    if (node) {
      node.scrollIntoView({ smooth: true})
    }
  }, [])
  const { sendMessage, selectedChat } = useChats()

  function handleSubmit(e) {
    e.preventDefault()

    sendMessage(
      selectedChat.recipients.map(recipient => recipient.id),
      text
    )
    setText('')
  }

  return (
    <div className='d-flex flex-column flex-grow-1'>
      <div className='flex-grow-1 overflow-auto'>
        <div className='d-flex flex-column align-items-start justify-content-end px-3'>
          {selectedChat.messages.map((message, index) => {
            const lastMessage = selectedChat.messages.length - 1 === index
            return (
              <div
                ref={lastMessage ? setRef: null }
                key={index}
                className={`my-1 d-flex flex-column ${message.fromMe ? 'align-self-end align-items-end' : ''}`}
              >
                <div className={`rounded px-2 py-1 ${message.fromMe ? 'bg-primary text-white' : 'border'}`}>
                  {message.text}
                </div>
                <div className={`text-muted small ${message.fromMe ? 'text-end' : ''}`}>
                  {message.fromMe ? 'You' : message.senderName}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='m-2'>
          <InputGroup>
            <Form.Control
              as="textarea"
              required
              value={text}
              onChange={e => setText(e.target.value)}
              style={{ height: '75px', resize: 'none' }}
            />
            <Button type="submit" variant="success">
              Send
            </Button>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  )
}

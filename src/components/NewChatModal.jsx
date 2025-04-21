import React, { useState } from 'react'
import { Modal,Form,Button } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider'
impport {useChats } from '../contexts/ChatsProvider'

export default function NewChatModal(closeModal) {

    const [selectedContactIdS, setSelectedContactIdS] = useState([])
    const { contacts } = useContacts()
    const { createChat } = useChats()

    function handleSubmit(e){
        e.preventDefault()
        createChat(selectedContactIdS)

        closeModal()
    }

    function handleCheckboxChange(contactId) {
        setSelectedContactIdS(prevSelectedContactIds => {
            if (prevSelectedContactIds.includes(contactId)) {
                return prevSelectedContactIds.filter(prevId => {
                    return contactId !== prevId
                })
            } else {
                return [...prevSelectedContactIds, contactId]
            }
        })
  }
  
    return (
    <>
    <Modal.Header closeButton>Create Conversation</Modal.Header>
    <Modal.Body>
      <Form onSubmit={handleSubmit}>
        { contacts.map(contact => (
            <Form.Group controlId={contact.id} key={contact.id}>
                <Form.Check 
                type='checkbox' 
                value={selectedContactIdS.includes(contact.id)} 
                label={contact.name} 
                onChange={() => handleCheckboxChange(contact.id)}
                />
            </Form.Group>
        ))}
        <Button type='submit'>Create</Button>
      </Form>
    </Modal.Body>

    
    </>
  )
}

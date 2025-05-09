import { useRef } from "react"
import React  from 'react'
import { Container, Form, Button } from  'react-bootstrap'
import {v4 as uuidV4} from 'uuid'

export default function Login({onIdSubmit}) {
    const idRef = useRef()
    function handleSubmit(e) {
        e.preventDefault()

        onIdSubmit(idRef.current.value)
    }
    function createNewId() {
        onIdSubmit(uuidV4())
    }

  return (
    <Container 
        className="align-items-center d-flex" style={{ height:
            '100vh'
        }}>
        <Form  onSubmit={handleSubmit} className="w-100">
        <Form.Group>
            <Form.Label>Enter User Name </Form.Label>
            <Form.Control type="text"  ref={idRef} placeholder="User Name" required />
        </Form.Group>
        <Button type="submit" className="mr-2">Login</Button>
        <Button onClick = {createNewId } variant="secondary">Create user ID</Button>
        </Form>    
    </Container>
  )
}

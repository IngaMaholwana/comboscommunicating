import React from 'react'
import {Tab, Nav}from 'react-bootstrap'

const CHATS_KEY = 'chats'
const CONTACTS_KEY = 'contacts'

export default function Navbar({ id }) { //esentially id acts like a cell numba to share with friends
    const [activeKey, setActiveKey] = React.useState(CHATS_KEY)
    
    return (
    <div style={{width: '350px'}} className='d-flex flex-column'>
        <Tab.Container activeKey={activeKey} >
            <Nav variant="tabs" className="justify-content-center">
                <Nav.Item>
                    <Nav.Link eventKey={CHATS_KEY}>chats</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="contacts">contacts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="third">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="fourth">Disabled</Nav.Link>
                </Nav.Item>
            </Nav>
        </Tab.Container>
    </div>
  )
}

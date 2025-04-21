import React, {useState} from 'react'
import {Tab, Nav, Button, Modal }from 'react-bootstrap'
import Chats from './Chats'
import Contacts from './Contacts'
import NewChatModal from './NewChatModal'
import NewContactModal from './NewContactModal'


const CHATS_KEY = 'chats'
const CONTACTS_KEY = 'contacts'

export default function Navbar({ id }) { //esentially id acts like a cell numba to share with friends
    const [activeKey, setActiveKey] = React.useState(CHATS_KEY)
    const [modalOpen, setModalOpen] = useState(false)
    const chatsOpen = activeKey === CHATS_KEY   


    function closeModal() {
        setModalOpen(false)
    }

    return (
    <div style={{width: '350px'}} className='d-flex flex-column'>
        <Tab.Container activeKey={activeKey} onSelect={setActiveKey} >
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
            <Tab.Content className='border-right overflow-auto flex-grow-2'>
                <Tab.Pane eventKey={CHATS_KEY}>
                    <Chats/>
                </Tab.Pane>
                <Tab.Pane eventKey={CONTACTS_KEY}>
                    <Contacts/>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                    <p>Groups</p>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                    <p>Not idead yet</p>
                </Tab.Pane>
            </Tab.Content>
            <div className='p-2 boarder-top boarder-right small'>
                Your Id: <span className='text-muted'>{id}</span>  
            </div>
            <Button onClick={() => setModalOpen(true)} className='rounded-0'>
                New {chatsOpen ? 'Chat' : 'Contact'}
            </Button>
        </Tab.Container>
        <Modal show={modalOpen} onHide={closeModal}>
            {chatsOpen ? 
            <NewChatModal closeModal={closeModal} /> : 
            <NewContactModal closeModal={closeModal} />
            }
        </Modal>
    </div>
  )
}

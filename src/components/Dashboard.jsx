import React from 'react'
import Navbar from './Navbar'
import OpenChat from './OpenChat'
import { useChats } from '../contexts/ChatsProvider'

export default function Dashboard({id}) {
  const { selectedChat } = useChats()

  return (
    <div className='d-flex' style={{  height: '100vh'}}>
        <Navbar id={id} />
        { selectedChat && <OpenChat />}


    </div>
  )
}

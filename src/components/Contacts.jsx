import React from 'react'
import { useContacts } from '../contexts/ContactsProvider'

export default function Contacts() {
    const {Contacts } = useContacts()

  return (
    <div>Contacts</div>
  )
}

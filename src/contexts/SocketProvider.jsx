import * as socket from 'socket.io'
import React, { useContext, useEffect, useState } from 'react'

const SocketContext = React.createContext()

export function useSocket(){
    return useContext(SocketContext)
}

export function SocketProvider(id, children) {
  const [socket, setSocket] = useState()
  
    return (
    <SocketContext.Provider value={socket}>
        {children}
    </SocketContext.Provider>
  )
}

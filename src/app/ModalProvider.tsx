import React, { createContext, useState } from "react"
import Modal from "../shared/Modal"

export const ModalContext = createContext<any>(null)

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalChild, setModalChild] = useState<React.ReactNode>()

  return (
    <ModalContext.Provider value={{ modalChild, setModalChild }}>
      {children}
      <Modal />
    </ModalContext.Provider>
  )
}

export default ModalProvider

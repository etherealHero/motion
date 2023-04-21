import { useContext } from "react"
import { ModalContext } from "../app/ModalProvider"

const Modal = () => {
  const { modalChild } = useContext(ModalContext)

  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">{modalChild}</div>
      </div>
    </>
  )
}

export default Modal

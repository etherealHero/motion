import ModalProvider from "./ModalProvider"
import { MainPage } from "../pages"

function App() {
  return (
    <ModalProvider>
      <MainPage />
    </ModalProvider>
  )
}

export default App

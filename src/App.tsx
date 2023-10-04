import { BrowserRouter } from 'react-router-dom'
import { AllRoutes } from './routes'
import { GlobalStyle } from './styles/global'
import { ControlUserProvider } from './context/userContext'

function App() {
  return (
    <>
      <ControlUserProvider>
        <BrowserRouter>
          <GlobalStyle />
          <AllRoutes />
        </BrowserRouter>
      </ControlUserProvider>
    </>
  )
}

export default App

import { BrowserRouter } from 'react-router-dom'
import { AllRoutes } from './routes'
import { GlobalStyle } from './styles/global'
import { ControlUserProvider } from './context/user-context'
import { ControlDrawerProvider } from './context/drawer-context'

function App() {
  return (
    <>
      <ControlDrawerProvider>
        <ControlUserProvider>
          <BrowserRouter>
            <GlobalStyle />
            <AllRoutes />
          </BrowserRouter>
        </ControlUserProvider>
      </ControlDrawerProvider>
    </>
  )
}

export default App

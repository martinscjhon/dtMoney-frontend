import { BrowserRouter } from 'react-router-dom'
import { AllRoutes } from './routes'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <AllRoutes />
      </BrowserRouter>
    </>
  )
}

export default App

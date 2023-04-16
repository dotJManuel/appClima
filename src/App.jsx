import AppClima from "./components/AppClima"
import { ClimaProvider } from "./context/climaProvider"

function App() {

  return (
    <ClimaProvider>
      <header>
        <h1>Buscador de Clima</h1>
      </header>
      <AppClima />
    </ClimaProvider>
  )
}

export default App

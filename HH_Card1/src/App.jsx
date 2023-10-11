import { image } from './assets/imageAPI'
import './App.css'
import Imagenes from './components/Imagenes'

function App() {

  return (
    <div>
      <Imagenes img={image[0]}/>
    </div>
  )
}

export default App

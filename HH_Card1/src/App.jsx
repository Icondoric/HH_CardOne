import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {places} from './assets/placesAPI'
import Codigo from './codigo/Codigo'
import './App.css'

function App() {

  return (
   <Codigo places={places}/>
  )
}

export default App

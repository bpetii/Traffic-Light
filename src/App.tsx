import { useState } from 'react'
import './App.css'

type LightState = 'stop' | 'slow' | 'go'

function App() {
  const [state, lightState] = useState<LightState>('stop');

  return (
    <div className='stop-light'>
      <div className='light red '></div>
      <div className='light slow on'></div>
      <div className='light go'></div>
    </div>
  )
}

export default App

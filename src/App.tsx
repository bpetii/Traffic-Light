import { useState } from 'react'
import './App.css'

type LightState = 'stop' | 'slow' | 'go'

function App() {
  const [state, lightState] = useState<LightState>('slow');

  const getLightClassName = (light: LightState) => {
    return `light ${light} ` + (state === light ? "on" : "");
  }

  return (
    <div className='stop-light'>
      <div className={getLightClassName('stop')}></div>
      <div className={getLightClassName('slow')}></div>
      <div className={getLightClassName('go')}></div>
    </div>
  )
}

export default App

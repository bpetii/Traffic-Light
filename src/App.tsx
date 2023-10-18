import { useEffect, useState } from 'react'
import './App.css'

const STOP_TIME = 3000;
const SLOW_TIME = 2000;
const GO_TIME = 5000;

type LightState = 'stop' | 'slow' | 'go'

function App() {
  const [state, lightState] = useState<LightState>('stop');

  const getLightClassName = (light: LightState) => {
    return `light ${light} ` + (state === light ? "on" : "");
  }

  useEffect(() => {
    if (state === 'stop') {
      setInterval(() => {lightState('go')}, STOP_TIME)
      return;
    } else 
    if (state === 'slow') {
      setInterval(() => {lightState('stop')}, SLOW_TIME)
      return;
    }
    if (state === 'go') {
      setInterval(() => {lightState('slow')}, GO_TIME)
      return;
    }

  }, [state])

  return (
    <div className='stop-light'>
      <div className={getLightClassName('stop')}></div>
      <div className={getLightClassName('slow')}></div>
      <div className={getLightClassName('go')}></div>
    </div>
  )
}

export default App

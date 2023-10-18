import { useEffect, useState } from 'react'
import './TrafficLight.css'

const STOP_TIME = 3000;
const SLOW_TIME = 2000;
const GO_TIME = 5000;

type LightState = 'stop' | 'slow' | 'go'

const TrafficLight = () => {
  const [state, setState] = useState<LightState>('stop');

  const getLightClassName = (light: LightState) => {
    return `light ${light} ` + (state === light ? "on" : "");
  }

  useEffect(() => {
    if (state === 'stop') {
      setTimeout(() => setState('go'), STOP_TIME)
    } else if (state === 'slow') {
      setTimeout(() => setState('stop'), SLOW_TIME)
    } else {
      setTimeout(() => setState('slow'), GO_TIME)
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

export default TrafficLight;
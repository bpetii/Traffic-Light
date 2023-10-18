import { useEffect, useState } from 'react'
import './App.css'
import TrafficLight from './TrafficLight';

const STOP_TIME = 3000;
const SLOW_TIME = 2000;
const GO_TIME = 5000;

type LightState = 'stop' | 'slow' | 'go'

function App() {
  return (
    <div style={{display: 'flex', gap: '10%', justifyContent: 'center'}}>
      <TrafficLight />
    </div>
  )
}

export default App

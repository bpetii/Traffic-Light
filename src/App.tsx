import './App.css'
import TrafficLight from './TrafficLight';

function App() {
  return (
    <div style={{display: 'flex', gap: '10%', justifyContent: 'center'}}>
      <TrafficLight />
      <TrafficLight lightStart='go'/>
      <TrafficLight />
      <TrafficLight lightStart='slow'/>
      <TrafficLight />
    </div>
  )
}

export default App

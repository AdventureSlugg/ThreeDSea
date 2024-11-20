import { Canvas } from '@react-three/fiber';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> Welcome to the Sea! </h1>
      <div id="canvas-container">
        <Canvas>
          <mesh>
            <ambientLight intensity={0.1} />
            <directionalLight color="red" position={[0, 0, 5]} />
            <boxGeometry args={[2,2,2]}></boxGeometry>
            <meshStandardMaterial></meshStandardMaterial>
          </mesh>
        </Canvas>
      </div>
    </div>
  );
}

export default App;

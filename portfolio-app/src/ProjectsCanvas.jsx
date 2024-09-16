import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import FloatingProjects from './FloatingProjects';

function ProjectsCanvas() {
  return (
    <Canvas>
      <OrbitControls 
       minDistance={20}
       maxDistance={20}
      />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Physics gravity={[0, 0, 0]}>
        <FloatingProjects />
      </Physics>
    </Canvas>
  );
}

export default ProjectsCanvas;
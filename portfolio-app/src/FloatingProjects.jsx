import React, { useRef, useState, useEffect } from 'react';
import { useSphere } from '@react-three/cannon';
import { Text, Sphere } from '@react-three/drei';

const projects = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7'];

function FloatingProject({ position, project }) {
  const [ref, api] = useSphere(() => ({
    mass: 1,
    position,
    args: [1], // Sphere radius
    velocity: [0, 0, 0],
  }));

  const [dragging, setDragging] = useState(false);

  const handlePointerDown = () => {
    api.velocity.set(0, 0, 0);
    setDragging(true);
  };

  const handlePointerMove = (e) => {
    if (dragging) {
      // Directly set position based on pointer position
      const { x, y, z } = e.point;
      api.position.set(x, y, z);
    }
  };

  const handlePointerUp = () => {
    setDragging(false);
    api.velocity.set(0, 0, 0);
  };

  useEffect(() => {
    // Use the subscription to position updates
    const unsubscribe = api.position.subscribe((position) => {
      const [x, y, z] = position;
      if (Math.abs(x) > 10) api.position.set(x > 10 ? 10 : -10, y, z);
      if (Math.abs(y) > 10) api.position.set(x, y > 10 ? 10 : -10, z);
      if (Math.abs(z) > 10) api.position.set(x, y, z > 10 ? 10 : -10);
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, [api.position]);

  return (
    <mesh
      ref={ref}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      castShadow
      receiveShadow
    >
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial color={'blue'} />
      </Sphere>
      <Text position={[0, 0, 1.5]} fontSize={0.5} color="black">
        {project}
      </Text>
    </mesh>
  );
}

function FloatingProjects() {
  return (
    <>
      {projects.map((project, index) => (
        <FloatingProject
          key={index}
          project={project}
          position={[Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5]}
        />
      ))}
    </>
  );
}

export default FloatingProjects;

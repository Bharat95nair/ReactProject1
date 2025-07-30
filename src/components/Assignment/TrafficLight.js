import React, { useState, useEffect } from 'react';

export default function TrafficLight() {
  const [activeLight, setActiveLight] = useState('green');

  useEffect(() => {
    let timer;

    if (activeLight === 'green') {
      timer = setTimeout(() => setActiveLight('red'), 4000);
    } else if (activeLight === 'red') {
      timer = setTimeout(() => setActiveLight('yellow'), 3000);
    } else if (activeLight === 'yellow') {
      timer = setTimeout(() => setActiveLight('green'), 2000);
    }

    return () => clearTimeout(timer);
  }, [activeLight]);

  const lightStyle = (color) => ({
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: activeLight === color ? color : '#ccc',
    margin: '10px auto',
    transition: 'background-color 0.3s'
  });

  return (
    <div style={{ textAlign: 'center', padding: '20px',backgroundColor:'black',width:'120px',borderRadius:'20px',margin:'50px auto' }}>
      <div style={lightStyle('green')}></div>
      <div style={lightStyle('red')}></div>
      <div style={lightStyle('yellow')}></div>
    </div>
  );
}

import React from 'react';
import Header from './Homepage/Header';
import Solutions from './Homepage/Solutions'

function App() {
  return (
    <div>
      <Header /> 
      <Solutions />
      
      <main style={{ padding: '20px', fontFamily: 'Courier New, monospace' }}>
        <h2>Your Cyber Performance Center</h2>
        <p>Build and sustain high-performing cyber teams keeping your organization protected against real world threats.</p>
      </main> 
    </div>
  );
}

export default App;

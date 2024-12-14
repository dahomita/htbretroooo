import React, {useState} from 'react';
import Header from './Homepage/Header';
import Solutions from './Homepage/Solutions'

//popup effect


function App() {
  const [isSolutionsVisible, setIsSolutionsVisible] = useState(false);
  return (
    <div>
      <Header onSolutionsHover={setIsSolutionsVisible}/> 
      <Solutions isVisible={isSolutionsVisible}/>
      
      <main style={{ padding: '20px', fontFamily: 'Courier New, monospace' }}>
        <h2>Your Cyber Performance Center</h2>
        <p>Build and sustain high-performing cyber teams keeping your organization protected against real world threats.</p>
      </main> 
    </div>
  );
}

export default App;

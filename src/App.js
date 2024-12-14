import React, {useState} from 'react';
import Header from './Homepage/Header';
import Solutions from './Homepage/Solutions'
import Products from './Homepage/Products'

//popup effect


function App() {
  const [isSolutionsVisible, setIsSolutionsVisible] = useState(false);
  const [isProductsVisible, setIsProductsVisible] = useState(false);
  return (
    <div>
      <Header 
      onSolutionsHover={setIsSolutionsVisible}
      onProductsHover={setIsProductsVisible}
      /> 
      <div onMouseEnter={() => setIsSolutionsVisible(true)} 
        onMouseLeave={() => setIsSolutionsVisible(false)}
      >
      <Solutions isVisible={isSolutionsVisible}/>
      </div>
      <div 
        onMouseEnter={() => setIsProductsVisible(true)} 
        onMouseLeave={() => setIsProductsVisible(false)}
      >
      <Products isVisible={isProductsVisible}/>
      </div>
      <main style={{ padding: '20px', fontFamily: 'Courier New, monospace' }}>
        <h2>Your Cyber Performance Center</h2>
        <p>Build and sustain high-performing cyber teams keeping your organization protected against real world threats.</p>
      </main> 
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import Header from './Homepage/Header';
import Solutions from './Homepage/Solutions';
import Products from './Homepage/Products';
import Resources from './Homepage/Resources';
import Company from './Homepage/Company';
import Business from './Homepage/Business';
import Body from './Homepage/Body'
import Footer from './Homepage/Footer'

//popup effect


function App() {
  const [isSolutionsVisible, setIsSolutionsVisible] = useState(false);
  const [isProductsVisible, setIsProductsVisible] = useState(false);
  const [isResourcesVisible, setIsResourcesVisible] = useState(false);
  const [isCompanyVisible, setIsCompanyVisible] = useState(false);
  const [isBusinessVisible, setIsBusinessVisible] = useState(false);
  return (
    <div style={{backgroundColor: 'yellow'}}>
      <Header 
      onSolutionsHover={setIsSolutionsVisible}
      onProductsHover={setIsProductsVisible}
      onResourcesHover = {setIsResourcesVisible}
      onCompanyHover = {setIsCompanyVisible}
      onBusinessHover = {setIsBusinessVisible}
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
      <div
        onMouseEnter={() => setIsResourcesVisible(true)}
        onMouseLeave={() => setIsResourcesVisible(false)}>
      <Resources isVisible={isResourcesVisible}/>
      </div>
      <div
        onMouseEnter={() => setIsCompanyVisible(true)}
        onMouseLeave={() => setIsCompanyVisible(false)}>
      <Company isVisible={isCompanyVisible}/>
      </div>
      <div
        onMouseEnter={() => setIsBusinessVisible(true)}
        onMouseLeave={() => setIsBusinessVisible(false)}>
      <Business isVisible={isBusinessVisible}/>
      </div>
      <main style={{ backgroundColor: 'yellow', fontFamily: 'Courier New, monospace' }}>
        <h2>Your Cyber Performance Center</h2>
        <p>Build and sustain high-performing cyber teams keeping your organization protected against real world threats.</p>
      </main>
      <Body/>
      <Footer/>
    </div>
    
  );
}

export default App;

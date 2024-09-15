import React from 'react';
import CompanyFetcher from './components/CompanyFetcher';
import CompanyUploader from './components/CompanyUploader';
//import './App.css';


const App: React.FC = () => {
  return (
    <div className="App">
      <CompanyFetcher />
      <CompanyUploader />
    </div>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
import './App.css';
import AdviceComponent from './Components/AdviceComponent';
import getData from './Services/AdviceService';
import Advice from "./Interfaces/interface";
function App() {
  const [adviceInfo, setAdviceInfo] = useState<Advice>();
 
  useEffect(()=>{
    const adviceData = async ()=>{
      const fetchData = await getData();
      console.log(fetchData);
      setAdviceInfo(fetchData);
    }

    adviceData();
  },[])

  return (
    <div>
      {
        adviceInfo && <AdviceComponent id={adviceInfo.slip.id} advice={adviceInfo.slip.advice} />
      }
      
      
    </div>
  );
}

export default App;



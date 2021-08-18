import React, {useEffect, useState} from 'react';
import './App.css';
import Chat from './Component/Chat';
import Warning from './Component/Warning';
import TextZone from './Component/TextZone'


function App() {

  const [inputMassage, setInputMassage] = useState('');
  const [ArrayMassage, setArrayMassage] = useState([]);

  function addMassageInChat (){
    let value = inputMassage.trim()

    if(value !== ''){ 
      setArrayMassage((prev)=> [...prev,{'author': 'Ivan', 'text': inputMassage }])    
    }else{
      setInputMassage('')
    }
  }

  function robotAnswer (){
    let inputText = ArrayMassage[ArrayMassage.length - 1].text
    setArrayMassage((prev)=> [...prev,{'author': 'robot', 'text': inputText}])           
  }
  
  useEffect(() => {
    if (inputMassage.length > 0){
      setTimeout(() =>{
        console.log('dfdf')
        robotAnswer();
      },2000)
    }
    setInputMassage('') 
    // eslint-disable-next-line
  },[ArrayMassage]);


  return (
    <div className="wrapper">
      <h2 className="name">Чатик!</h2>
      <Chat ArrayMassage={ArrayMassage}/>
      <TextZone value={inputMassage} onChange={setInputMassage} addMassageInChat={addMassageInChat}/>
      <Warning input={inputMassage}/>   
    </div>
  );
}

export default App;

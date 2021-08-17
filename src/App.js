import React, {useEffect, useState} from 'react';
import './App.css';
import Chat from './Component/Chat';
import Warning from './Component/Warning';
import TextZone from './Component/TextZone'


function App() {

  const [inputMassage, setInputMassage] = useState('');
  const [ArrayMassage, setArrayMassage] = useState([]);
  const [robot, setRobot] = useState(false);

  function addMassageInChat (){
    if(inputMassage.length){ 
      setArrayMassage((prev)=> [...prev,{'author': 'Ivan', 'text': inputMassage }])
      setInputMassage('')
      setRobot(prev => !prev)    
    }
  }

  function robotAnswer (){
    if (ArrayMassage.length){
      let inputText = ArrayMassage[ArrayMassage.length - 1].text
      setArrayMassage((prev)=> [...prev,{'author': 'robot', 'text': inputText}])
    }else{
      setArrayMassage((prev)=> [...prev,{'author': 'robot', 'text': 'Hello!'}])
    }
            
  }
  
  function deleteMassage(event){
    let delHTML = event.target.parentNode;
    delHTML.remove()
  }

  useEffect(() => {
    setTimeout(() =>{
      robotAnswer();
    },2000) 
    // eslint-disable-next-line
  },[robot]);


  return (
    <div className="wrapper">
      <h2 className="name">Чатик!</h2>
      <div className="chat">
        {ArrayMassage.map((el,index) => {
          return <Chat el={el} index={index} deleteMassage={deleteMassage}/>
        })}
      </div>

      <TextZone value={inputMassage} onChange={setInputMassage} addMassageInChat={addMassageInChat}/>
      <Warning input={inputMassage}/>   
    </div>
  );
}

export default App;

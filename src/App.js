import React, {useEffect, useState} from 'react';
import MessageInput from './Component/MessageInput'
import MessageList from './Component/MessageList';
import {makeStyles} from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Dialog from './Component/Dialogs';

const useStyles = makeStyles((theme) => ({
  name: {
    textAlign: 'center',
  },
  flex : {
    display: 'flex',
    justifyContent: 'center',
  },
  dialogs: {
    backgroundColor: 'yellow',
    border: '1px solid black',
    height: '604px',
    padding: '10px',
    boxSizing: 'border-box'
  }
}))

function App() {

  const classes = useStyles()

  const [ArrayMassage, setArrayMassage] = useState([]);
  const [flag,setFlag] = useState(false)

  function addMassageInChat (inputMassage){  
    setArrayMassage((prev)=> [...prev,{'author': 'Ivan', 'text': inputMassage }])  
    setFlag(true)    
  }

  function robotAnswer (){
    setFlag(false)  
    let inputText = ArrayMassage[ArrayMassage.length - 1].text
    setArrayMassage((prev)=> [...prev,{'author': 'robot', 'text': inputText}])  
           
  }
  
  useEffect(() => {
    if (flag){
      setTimeout(() =>{
        robotAnswer();
      },1500)
    } 
    // eslint-disable-next-line
  },[ArrayMassage]);


  return (
    <Container maxWidth="xl">
      <h2 className={classes.name}>Чатик!</h2>
      <div className={classes.flex}>
        <div className={classes.dialogs}>
          <Dialog />
        </div>
        <div>
          <MessageList ArrayMassage={ArrayMassage}/>
          <MessageInput addMassageInChat={addMassageInChat}/>
        </div>       
      </div>
      </Container>
      
  );
}

export default App;

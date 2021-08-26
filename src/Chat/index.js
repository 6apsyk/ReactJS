import React, {useEffect, useState} from 'react';
import MessageInput from './MessageInput'
import MessageList from './MessageList';
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Dialog from './Dialogs';

const useStyles = makeStyles((theme) => ({
  name: {
    textAlign: 'center',
  },
  flex : {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px'
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

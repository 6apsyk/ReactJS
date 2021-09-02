import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {addMassage} from './chatSlice';
import MessageInput from './MessageInput'
import MessageList from './MessageList';
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Dialog from './Dialogs';
// import { useParams } from 'react-router-dom';

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
  // const {id} = useParams()
  // console.log(id)

  const classes = useStyles()

  const arraySlice = useSelector((state) => state.chat.arraySlice)
  const dispatch = useDispatch()

  const [flag,setFlag] = useState(false)

  function addMassageInChat (inputMassage){  
    dispatch(addMassage({author: 'me', text: inputMassage })) 
    setFlag(true)    
  }

  function robotAnswer (){
    setFlag(false)  
    let inputText = arraySlice[arraySlice.length - 1].text
    dispatch(addMassage({author: 'robot', text: inputText}))  
           
  }
  
  useEffect(() => {
    if (flag){
      setTimeout(() =>{
        robotAnswer();
      },1500)
    } 
    // eslint-disable-next-line
  },[arraySlice]);


  return (
    <Container maxWidth="xl">
      <div className={classes.flex}>
        <div className={classes.dialogs}>
          <Dialog />
        </div>
        <div>
          <MessageList ArrayMassage={arraySlice}/>
          <MessageInput addMassageInChat={addMassageInChat}/>
        </div>       
      </div>
    </Container>
      
  );
}

export default App;

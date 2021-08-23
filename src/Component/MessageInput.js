import React, { useState} from "react";
import Warning from "./Warning";
import {makeStyles} from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
    textArea: {
        width: '600px',
        height: '100px',
        backgroundColor: 'seagreen',
        border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
    },
      
    input :{
        width: '70%',
        margin:'0 15px'
    }
}));


const MessageInput = ({addMassageInChat}) => {

    const classes = useStyles()

    const [inputMassage, setInputMassage] = useState('');

    function SendAndRemoveInput (){
        let value = inputMassage.trim()
    
        if(value !== ''){ 
            setInputMassage('')
            addMassageInChat(value) 
               
        }else{
            setInputMassage('')
        }  
      }

    return <div>
                <div className={classes.textArea} >
                        <TextField 
                            className={classes.input} 
                            value={inputMassage} 
                            autoFocus
                            onChange={(e) => setInputMassage(e.target.value)}
                            onKeyPress={({key}) => {
                            if( key === 'Enter'){
                                SendAndRemoveInput()
                            }
                            }}
                            />

                        <Button 
                            variant="contained" 
                            color="primary" 
                            className={classes.button} 
                            onClick={SendAndRemoveInput}>
                            Отправить
                        </Button>
                    </div>
                    <Warning input={inputMassage}></Warning>
            </div>
}

MessageInput.propTypes = {
    addMassageInChat : PropTypes.func.isRequired
} 

export default MessageInput;
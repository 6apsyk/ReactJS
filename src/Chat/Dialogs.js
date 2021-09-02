import React, {useState} from 'react';
import {List,ListItem,Typography,Box, TextField} from '@material-ui/core';
import { useHistory } from 'react-router';

export default function Dialog() {
    // eslint-disable-next-line
    const [text, setText] = useState('')
    const [dialogsArray, setDialogsArray] = useState([
        {id: 1, name: 'Диалог 1'},
        {id: 2, name: 'Диалог 2'},
        {id: 3, name: 'Диалог 3'},
    ])
    
    let history = useHistory()

    function addDialog() {
        const value = text.trim()
        if (dialogsArray.length > 0) {
            let lastEl = dialogsArray[dialogsArray.length-1].id + 1
            setDialogsArray((prev) => [...prev, {name: value, id: lastEl}]
            )
            
        }else{
            setDialogsArray((prev) => [...prev, {name: value, id: 1}]
            
        )}
        setText('')
    }
    // function delDialog(e) {
    //     console.log(e.target.id)
    //     setDialogsArray((prev) =>  {
    //         let newMas = prev.filter(el => String(el.id) !== e.target.id);
    //         console.log(newMas)
    //         return newMas;
    //     })
    // }
    function delDialog(){
        if (dialogsArray.length > 0){
            let lastEl = dialogsArray[dialogsArray.length-1];
            setDialogsArray((prev)=> {
                let newMas = prev.filter(el => el !== lastEl);
                return newMas;
            })
        }
    }

    return (
        <List>
            <Typography variant='h5' align='center'>
                Диалоги
            </Typography>

            {dialogsArray.map((el) => {
                return <ListItem key={el.id} id={el.id} onClick={()=> history.push(`/chats/${el.id}`)}>
                            id {el.id}  {el.name} 
                        </ListItem>
            })}
            <Box style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
                <TextField type='text'
                        value={text}
                        onChange={(e) => {setText(e.target.value)}}/>
                <button onClick={addDialog}>Добавить чат</button>
                <button onClick={delDialog}>удалить</button>
            </Box>
        </List>
    )
}
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import React, {useState} from 'react';


export default function Dialog() {
    // eslint-disable-next-line
    const [dialogsArray, setDialogsArray] = useState([
        {id: 1, name: 'Диалог 1'},
        {id: 2, name: 'Диалог 2'},
        {id: 3, name: 'Диалог 3'}
    ])

    return (
        <List>
            <Typography variant='h5' align='center'>
                Диалоги
            </Typography>

            {dialogsArray.map((el) => {
                return <ListItem key={el.id}>
                            <Checkbox
                                edge="start"                               
                            />
                            {el.name}
                        </ListItem>
            })}
        </List>
    )
}
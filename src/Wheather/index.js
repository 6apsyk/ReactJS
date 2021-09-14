import React, {useState} from "react";
import { TextField, Typography,Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InfoWheather from './InfoWheather'
import { useDispatch, useSelector } from "react-redux";
import {setWheather,setError,setLoading} from "./wheatherSlice";


const useStyles = makeStyles((theme) => ({
  chatWrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: 'column',
    alignItems: "center",
    backgroundImage: "url(https://images.unsplash.com/photo-1613040475057-c9f42557d07c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80)",
    backgroundSize: '100% 100%'
},

  componentWrapper: {
    width: "600px",
    height: "600px",
    display: "flex",
    flexDirection: "column",
  },
  inputRoot: {
    margin: "10px 10px",
    width: "50%",
    '& label': {
      color: 'white',
    },
  },
  input: {
    color: "white",
  },
  button: {},
}));
const API_KEY = 'ab07d6ee48998c54d1de1a8d5ad3891a'

const sendWheatherWithThunk = (citys) => async (dispatch, getState) => {

    const {wheather : { loading }} = getState()
    console.log('Loading', loading)

    if (!loading && (citys.length > 0)){
        try {
            dispatch(setError(false))
            dispatch(setLoading(true))
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citys}&appid=${API_KEY}&units=metric`)
            if (!response.ok){
                throw new Error('Somethink went wrong')
            }
            const result = await response.json()
            console.log(result)
            dispatch(setWheather(result))

        }catch (e){
            dispatch(setWheather(null))
            dispatch(setError(true))
            // alert('такого города нет!')
        }finally{
            dispatch(setLoading(false))
        }
    }
  };

const Wheather = () => {

    const classes = useStyles()
    const [nameCity, setNameCity] = useState('')
    const {data,loading,error}  = useSelector((state) => state.wheather)
    const dispatch = useDispatch()

    
    const sendAndRemoveInput = () => {
        const city = nameCity.trim();
        if (city.length > 0){
            dispatch(sendWheatherWithThunk(city))
        }
        setNameCity('')
    }


    return (
        <div className={classes.chatWrapper}>
            <Typography variant='h3'>Узнайте погоду в любом городе</Typography>
            <TextField
                    value={nameCity}
                    label="Введите город"
                    onKeyDown={({ key }) => {
                        if (key === "Enter") {
                          sendAndRemoveInput();
                        }
                    }}
                    onChange={(e) => setNameCity(e.target.value)}
                    InputProps={{
                    className: classes.input,
                    }}
                    // multiline
                    classes={{
                    root: classes.inputRoot,
                    }}
                />
            <Button
                    variant="contained"
                    color="primary"
                    disabled={loading}
                    onClick={sendAndRemoveInput}
                    classes={{
                    root: classes.button,
                    }}
                >
                    Получить погоду
            </Button>
            {error && <div>Возникла ошибка, введите город правильно!</div>}
            {data !== null ? <InfoWheather data={data}/> : ''}
            

        </div>
    )
}

export default Wheather
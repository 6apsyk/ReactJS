import { Checkbox,Box} from "@material-ui/core";
import {useDispatch,useSelector} from 'react-redux'
import { changeState } from "./profileSlice";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    color:{
        color:'red'
    }
}))



export default function Playground (){
    const classes = useStyles()

    const {value} = useSelector(state => state.profile)
    const dispatch = useDispatch()

    return (
        <Box>
            <h1>Profile</h1>
            <div style={{display:'flex', alignItems:'center'}}>
                <Checkbox checked={value} onChange={()=>dispatch(changeState())}>
                </Checkbox>
                <p className={value && classes.color}>{value ? `Выбрано` : 'необходимо выбрать!'}</p>
            </div>
        </Box>       
    )
}
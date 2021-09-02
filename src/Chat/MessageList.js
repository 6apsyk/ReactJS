import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
    chat : {
        width: '600px',
        height: '500px',
        backgroundColor: 'salmon',
        border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        overflow:'auto'
      },
    msgChat : {
        fontSize: '20px',
        margin:' 10px',
        border: '1px solid black',
        display:' flex',
        justifyContent: 'space-between',
      }
}))

function MessageList({ArrayMassage}){

    const classes = useStyles()

    function deleteMassage(event){
        let delHTML = event.target.parentNode;
        delHTML.remove()
    }

    return <div className={classes.chat}>
                {ArrayMassage.map((el,index) => {
                return <div className={classes.msgChat} key={index}>{`${el.author}: ${el.text}`}
                            <button style={{backgroundColor:'green'}} onClick={deleteMassage}>&times;</button>
                        </div>
                })}
            </div>
}

export default MessageList;

MessageList.propTypes = {
    ArrayMassage : PropTypes.array.isRequired
}
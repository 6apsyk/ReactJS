
function Chat({el,index,deleteMassage}){
    return <div className="msg-chat" key={index}>{`${el.author}: ${el.text}`}
                <button style={{backgroundColor:'green'}} onClick={() => deleteMassage()}>&times;</button>
            </div>
}

export default Chat
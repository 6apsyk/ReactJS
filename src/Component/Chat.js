
function Chat({ArrayMassage}){

    function deleteMassage(event){
        let delHTML = event.target.parentNode;
        delHTML.remove()
    }

    return <div className="chat">
                {ArrayMassage.map((el,index) => {
                return <div className="msg-chat" key={index}>{`${el.author}: ${el.text}`}
                            <button style={{backgroundColor:'green'}} onClick={deleteMassage}>&times;</button>
                        </div>
                })}
            </div>
}

export default Chat

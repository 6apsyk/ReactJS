function TextZone(props){
    return <div className="text-area" >
                <input className="input" 
                    value={props.value} 
                    onChange={(e) => props.onChange(e.target.value)}
                    onKeyPress={({key}) => {
                    if( key === 'Enter'){
                        props.addMassageInChat()
                    }
                    }}
                    />

                <button className="button" onClick={() => props.addMassageInChat()}>Отправить</button>
            </div>
}

export default TextZone;
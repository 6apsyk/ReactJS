

const InfoWheather = ({data}) => {
    return (
        <>
            <div style={{color: 'black', fontSize: '50px',border:'1px solid black',padding:'2px', backgroundColor:'white',opacity:'0.5'}}>Температура: {data.main.temp}</div>
            <div style={{color: 'black', fontSize: '50px',border:'1px solid black',padding:'2px', backgroundColor:'white',opacity:'0.5'}}>Город: {data.name}</div>
            <div style={{color: 'black', fontSize: '50px',border:'1px solid black',padding:'2px', backgroundColor:'white',opacity:'0.5'}}>Страна: {data.sys.country}</div>

        </>
    )
}

export default InfoWheather
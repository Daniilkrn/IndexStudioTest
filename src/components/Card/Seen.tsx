type SeenProps = {
    id: string,
    secO_State: boolean
    seenState?: boolean
}

const Seen = ({id,secO_State}:SeenProps) => {

    const seen = localStorage.getItem(`${id + id}`)
    
    return (
        <>
        {seen ? 
            <div className={secO_State ? "seen horizontal" : "seen"}>
                <p>Просмотрено</p>
            </div>   
            : <span className="dot">.</span>
        }
        </>
    )
}

export default Seen
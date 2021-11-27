import React, { useState, useEffect } from 'react'

const RandomPage = () => {

    const [count, setCount] = useState(0)

    useEffect(()=>{

        document.write=`Kliknuto ${count} puta`

    }, [])

    return (
        <div>
            <p>Broj: {count}</p>
            <button className="btn btn-secondary" onClick={ () => setCount(count -  1)}>Minus</button>
            <button className="btn btn-primary" onClick={ () => setCount(count + 1)}>Plus</button>
        </div>
    )
}

export default RandomPage

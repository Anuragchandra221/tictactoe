import React from 'react'
const Square = ({value, onClick, classs})=>{
    return(
        <>
            <button type="button" className={ `${classs?"win":""}  square ${value==='0'?'squareX':'square0'}`} onClick={onClick}>
                {value}
            </button>
        </>
    )
}
export default Square

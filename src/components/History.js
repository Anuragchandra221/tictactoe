import React from 'react'

function History({ history, moveTo, currentMove}) {
    return (
        <ul className='history'>
          {history.map((__, move)=>{
            return (
              <li key={move}><button className="history"
              style={{
                fontWeight: move===currentMove?'bold':'normal'
              }}
              type="button" onClick={()=>{
                moveTo(move);
              }}>{move===0?`Go to start`: `Go to move ${move}`}</button></li> 
            )
            
          })}
          
        </ul>
    )
}

export default History

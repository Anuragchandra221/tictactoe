import React from 'react'

function History({ history, moveTo, currentMove}) {
    return (
        <ul>
          {history.map((__, move)=>{
            return (
              <li key={move}><button 
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

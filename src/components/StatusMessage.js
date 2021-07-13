import React from 'react'

function StatusMessage({winner, current}) {
    // const msg = winner? `Winner is ${winner}`:`Next player is ${current.isXNext?"X":"0"} `
    const noMovesLeft = current.board.every(el=>el!=null)
    return (
        <div>
        <h2 style={
            {
                color: "white"
            }
        }>
        <span>{winner &&  `Winner is ${winner}`}</span>{!winner &&  !noMovesLeft &&  `Next player is  ${current.isXNext?"X":"0"} `}
        {!winner && noMovesLeft && 'X and 0 tied'}
        </h2>
        </div>
        
    )
}

export default StatusMessage

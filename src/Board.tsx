import * as React from 'react'
import Square from './Square'

type Props = {
    value: number
}

const Board = (props: Props): React.FC => {
    return (
        <Square value={props.value} />
    )
}

export default Board

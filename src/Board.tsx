import * as React from 'react'
import Square from './Square'

class Board extends React.Component {

    renderSquare() {
        return (
            <Square value={1} />
        )
    }

    render() {
        return (
            this.renderSquare()
        )
    }
}

export default Board

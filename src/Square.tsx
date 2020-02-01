import * as React from 'react'

type Props = {
    value: number
}

const Square = (props: Props) => {
    return (
        <button className="square">
            {props.value}
        </button>
    )
}

export default Square

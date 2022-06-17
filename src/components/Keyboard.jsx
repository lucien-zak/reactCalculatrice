import React from 'react'
import Input from './Input'



function Keyboard(props) {

    return (
        <>
            {Array.from(Array(10).keys()).map(i => {
                return <Input disabled={props.disabled} onClick={props.onClick} key={i} input={i} />
            })}
            <Input disabled={props.disabled} onClick={props.onClick} key="." input="." />
            <Input onClick={props.onClick} key="C" input="C" />
        </>
    )
}

export default Keyboard
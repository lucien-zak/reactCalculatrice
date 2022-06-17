import React from 'react'

function Input(props) {
    return (
        <div className='p-3'>
            <div className='container'>
                <button className='btn btn-primary btn-lg px-5 p-4' disabled={props.disabled} value={props.input} onClick={props.onClick}>{props.input}</button>
            </div>
        </div>
    )
}
export default Input
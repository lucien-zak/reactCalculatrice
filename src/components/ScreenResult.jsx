import React from 'react'
import { useEffect } from 'react'

function ScreenResult(props) {

    useEffect(() => {}, [props.input])

    return (
        <div className='row align-items-center m-3'>
            <label htmlFor="result">Calculator 9000</label>
            <input className='form-control' readOnly value={props.input} id="result" type="text" />
        </div>
    )
}

export default ScreenResult
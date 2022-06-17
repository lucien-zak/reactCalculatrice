import React from 'react'
import ScreenResult from './ScreenResult'
import Keyboard from './Keyboard'
import Operator from './Operator'
import { useState } from 'react'

function Calculator() {
    const [value, setValue] = useState(0);
    const [operation, setOperation] = useState(null);
    const [result, setResult] = useState(false);

    const inputHandler = (event) => {
        if (event.target.value === 'C') { resetScreen(); return; }
        if (value === 0) {
            setValue(event.target.value ? parseInt(event.target.value) : value)
        } else {
            setValue(value + event.target.value)
        }
    }
    const resetScreen = () => {
        setValue(0)
        setOperation(null)
        setResult(false)
    }

    const operationHandler = (event) => {
        if (operation === null) {
            setOperation(value + event.target.innerText)
            setValue(0)
        }
        else {
            setOperation(operation + value + event.target.innerText)
            setValue(0)
        }

    }

    const resultHandler = () => {
        setOperation(operation + value)
        setValue(eval(operation + value))
        setResult(true)
    }



    return (
        <div className='container' style={{ backgroundColor: "Grey", color: "white" }}>
            <ScreenResult input={value} />
            <div className='m-3'>
                <div className='d-flex flex-wrap justify-content-around'>
                    <Operator operationHandler={operationHandler} result={result} />
                    <div className='p-3'>
                        <div className='container'>
                            <button className='btn btn-success btn-lg px-5 p-4' disabled={result} onClick={resultHandler}>=</button>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-wrap justify-content-around'>
                    <Keyboard disabled={result} onClick={inputHandler} />
                </div>
            </div>
        </div>
    )
}
export default Calculator
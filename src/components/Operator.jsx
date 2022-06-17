import React from 'react'

function Operator(props) {

    const Operator = ['+', '-', '*', '/']

    return (

        <>
            {Operator.map(i => {
                return (
                    <div className='p-3'>
                        <div className='container'>
                            <button className='btn btn-danger btn-lg px-5 p-4' disabled={props.result} onClick={props.operationHandler} key={i}>{i}</button>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Operator
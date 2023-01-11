import React, { useReducer } from 'react'

function fnReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + action.payload};
        case 'decrement':
            return {count: state.count - action.payload};
        default:
            throw new Error('Unexpected Action!')
    }
}

const initState = {
    count: 0,
    theme: 'light'
}

export default function Calculate() {

    const [state, dispatch] = useReducer(fnReducer, initState);

  return (
    <div className='flex items-center space-x-3 mb-3'>
        <button onClick={() => dispatch({type: 'decrement', payload: 2})} className='border py-1 px-3'> - </button>
        <span>{state.count}</span>
        <button onClick={() => dispatch({type: 'increment', payload: 2})} className='border py-1 px-3'> + </button>
    </div>
  )
}

import React, { useReducer } from 'react'

function fnReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            throw new Error('Unexpected Action!')
    }
}
export default function Calculate() {
    const [count, setCount] = useReducer(fnReducer, 0);

  return (
    <div className='flex items-center space-x-3 mb-3'>
        <button onClick={() => setCount({type: 'decrement'})} className='border py-1 px-3'> - </button>
        <span>{count}</span>
        <button onClick={() => setCount({type: 'increment'})} className='border py-1 px-3'> + </button>
    </div>
  )
}

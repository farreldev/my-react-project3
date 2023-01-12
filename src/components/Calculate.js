import { useAppContext } from '../context/app-context';

export default function Calculate() {
    const [state, dispatch] = useAppContext();
    const num = 1;

    return (
        <div>
            <div className='flex items-center space-x-3 mb-5'>
                <button onClick={() => dispatch({type: 'decrement', payload: num})} className='border py-1 px-3'> - </button>
                <span>{state.count}</span>
                <button onClick={() => dispatch({type: 'increment', payload: num})} className='border py-1 px-3'> + </button>
            </div>
        </div>
    )
}

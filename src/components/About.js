import { useReducer } from 'react';
import { Link } from 'react-router-dom';

function fnReduce(state, action) {
    switch(action.type) {
        case 'increment':
            return {...state, count: state.count + action.payload };
        case 'decrement':
            return {...state, count: state.count - action.payload };
        case 'toggletheme':
            return {...state, theme: state.theme === "dark" ? "light" : "dark"}
        default:
            throw new Error('Unexpected action');
    }
}

const initState = {
    count: 0,
    theme: 'light'
}

const About = () => {
    return(
        <div>
            <div className='flex items-center space-x-3 mb-3'>
                <button className='border py-1 px-3'> - </button>
                <span>0</span>
                <button className='border py-1 px-3'> + </button>
            </div>
            <div className='flex flex-col items-start my-5'>
                <span className='capitalize block mb-2'>{}</span>
                <button className='border shadow-lg py-1 px-5'>Toggle theme</button>
            </div>
            <h1>Ini adalah halaman About, klik <Link className='text-blue-500 font-medium underline' to="/about/team">disini</Link> untuk mengunjungi halaman team</h1>
        </div>
    )
}

export default About;
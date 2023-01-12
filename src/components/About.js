import { Link } from 'react-router-dom';
import { useThemeContext } from '../context/theme-context';

const About = () => {
    const [state, dispatch] = useThemeContext();
    return(
        <div>
            <div>
                <p className='capitalize mb-3'>Theme: {state.theme}</p>
                {/* <button onClick={() => dispatch({type: 'toggletheme'})} className='py-1 px-3 border'>Tes toggle</button> */}
            </div>
            <div className='flex flex-col items-start my-5'>
                {/* <span className='capitalize block mb-2'>{context.theme}</span> */}
                <button onClick={() => dispatch({type: 'toggletheme'})} className='border shadow-lg py-1 px-5'>Toggle to <span className='capitalize'>{state.theme === "light" ? "dark" : "light"}</span></button>
            </div>
            <h1>Ini adalah halaman About, klik <Link className='text-blue-500 font-medium underline' to="/about/team">disini</Link> untuk mengunjungi halaman team</h1>
        </div>
    )
}

export default About;
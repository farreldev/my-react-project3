import { Link } from 'react-router-dom';
import { useAppContext } from '../context/app-context';


const About = () => {
    const context = useAppContext();
    return(
        <div>
            <div className='flex items-center space-x-3 mb-3'>
                <button className='border py-1 px-3'> - </button>
                <span>0</span>
                <button className='border py-1 px-3'> + </button>
            </div>
            <div className='flex flex-col items-start my-5'>
                {/* <span className='capitalize block mb-2'>{context.theme}</span> */}
                <button onClick={() => context.setTheme(context.theme === "dark" ? "light" : "dark")} className='border shadow-lg py-1 px-5'>Toggle to <span className='capitalize'>{context.theme === "dark" ? "light" : "dark"}</span></button>
            </div>
            <h1>Ini adalah halaman About, klik <Link className='text-blue-500 font-medium underline' to="/about/team">disini</Link> untuk mengunjungi halaman team</h1>
        </div>
    )
}

export default About;
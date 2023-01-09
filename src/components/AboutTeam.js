import { Link } from 'react-router-dom';
export default function AboutTeam() {
    return (
        <>
            <h1 className='mb-2'>Team Page</h1>
            <p>
                <Link to="/about" className='text-blue-500 font-medium underline'>Back to About</Link>
            </p>
        </>
    )
}
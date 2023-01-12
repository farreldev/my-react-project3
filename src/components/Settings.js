import { useAppContext } from '../context/app-context';
export default function Settings() {
  const [state, dispatch] = useAppContext();
  console.log('user data: render');
  return (
    <input onChange={(e) => dispatch({type: 'updateUser', payload:{...state.user, name: e.target.value}})} type="text" className='border p-2 w-full bg-gray-700 text-white dark:bg-white dark:text-gray-700 rounded shadow-lg' placeholder='Change Name' value={state.user.name ?? ''} />
  )
}

import { useAppContext } from '../context/app-context';
export default function Settings() {
  const context = useAppContext();
  return (
    <input onChange={(e) => context.setUser({...context.user, name: e.target.value})} type="text" className='border p-2 w-full bg-gray-700 text-white dark:bg-white dark:text-gray-700 rounded shadow-lg' placeholder='Change Name' value={context.user.name ?? ''} />
  )
}

import { useAppContext } from '../context/app-context'

export default function Settings() {
    const context = useAppContext();
  return (
    <input type="text" className='border p-2 w-full bg-gray-700 text-white dark:bg-white dark:text-gray-700 rounded shadow-lg' onChange={(e) => context.setName(e.target.value)} placeholder='Change Name' />
  )
}

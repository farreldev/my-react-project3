import { useAppContext } from '../context/app-context'

export default function DisplayTheme() {
    const context = useAppContext();
    const handleToggle = () => {
        // context.setTheme(context.theme === "dark" ? "light" : "dark");
    }
  return (
    <div>
        <button onClick={handleToggle} className='border shadow-lg text-gray-700 dark:bg-gray-700 dark:text-white py-1 px-2 min-w-[100px] rounded capitalize'>switch {context.theme}</button>
    </div>
  )
}

import { useAppContext } from "../context/app-context"

export default function DisplayTheme() {
  const context = useAppContext();
  return (
    <div>
        <button onClick={() => context.setTheme(context.theme === "dark" ? "light" : "dark")} className='border shadow-lg text-gray-700 dark:bg-gray-700 dark:text-white py-1 px-2 min-w-[100px] rounded capitalize'>switch to {context.theme === "dark" ? "light" : "dark"}</button>
    </div>
  )
}

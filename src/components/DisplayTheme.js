import { useThemeContext } from "../context/theme-context";

export default function DisplayTheme() {
  const [state, dispatch] = useThemeContext();
  console.log('Theme: render');
  return (
    <div>
        <button onClick={() => dispatch({type: 'toggletheme'})} className='border shadow-lg text-gray-700 dark:bg-gray-700 dark:text-white py-1 px-2 min-w-[100px] rounded capitalize'>switch to {state.theme === "light" ? "dark" : "light"}</button>
    </div>
  )
}

import { useAppContext } from "../context/app-context";
import Settings from "./Settings";
import Calculate from "./Calculate";
const Home = () => {
  const [state] = useAppContext();
  return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="mb-3 text-gray-700 dark:text-white">Ini Home atau halaman depan.</h1>
                <div className="flex space-x-3 items-center mb-3">
                    <img className="max-w-[70px] rounded-full" src={state.user.avatar} alt="" />
                    <p>Hi <b className="text-gray-500 dark:text-white capitalize">{state?.user?.name}</b></p>
                </div>
            </div>
            <Calculate />
            <Settings />
        </div>
    )
  }

export default Home;
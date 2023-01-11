import { useAppContext } from "../context/app-context";
import Settings from "./Settings";

const Home = () => {
  const context = useAppContext();
  return (
        <div>
            <div className="flex items-center justify-between mb-5">
                <h1 className="mb-3 text-gray-700 dark:text-white">Ini Home atau halaman depan.</h1>
                <div className="flex space-x-3 items-center mb-3">
                    <img className="max-w-[70px] rounded-full" src={context.user.avatar} alt="" />
                    <p>Hi <b className="text-gray-500 dark:text-white capitalize">{context?.user?.name}</b></p>
                </div>

            </div>
            <Settings />
        </div>
    )
  }

export default Home;
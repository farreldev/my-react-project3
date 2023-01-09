import { useAppContext } from "../context/app-context";
import Settings from "./Settings";

const Home = () => {
    const context = useAppContext();
    return (
        <>
            <h1 className="mb-3">Ini Home, Hi {context.name} </h1>
            <Settings />
        </>
    )
}

export default Home;
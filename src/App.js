import { useEffect } from "react";
import Router from "./Router";
import Navbar from "./Components/Navbar/Navbar";
import { getItem } from "./Utils/LocalStorage";
import { THEME } from "./Constants";

function App() {
    useEffect(() => {
        if (getItem(THEME)) {
            document.body.classList.add("dark-theme");
        }
    }, []);
    return (
        <div>
            <Navbar />
            <Router />
        </div>
    );
}

export default App;

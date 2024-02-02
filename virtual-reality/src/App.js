import {Route, Routes} from "react-router-dom";
import Home from "./components/Homepage/Home";

function App() {
    return (
        <section>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </section>
    );
}

export default App;
import {Route, Routes} from "react-router-dom";
import Homepage from "./Components/pages/Homepage";

function App() {
    return (
        <section>
            <Routes>
                <Route path="/" element={<Homepage />}/>
            </Routes>
        </section>
    );
}

export default App;
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Add from "./components/Add";
import Update from "./components/Update";
import Detail from "./components/Detail";



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>  } />
                <Route path="/add" element={<Add/>  } />
                <Route path="/update/:id" element={<Update/>  } />
                <Route path="/detail/:id" element={<Detail/> } />
            </Routes>
        </BrowserRouter>
        )
}



export default App;

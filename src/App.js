import './App.scss';
import {Routes, Route} from "react-router-dom";
import {HelloAndCounter} from './firstProject/HelloAndCounter'
import {Counter} from './secondProject/Counter.jsx'
import {Layout} from './components/Layout'
import {Temperature} from "./thirdProject/Temperature";
import Search from "./fourthProject/search";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index  element={<HelloAndCounter/>}/>
                    <Route path="/counter" element={<Counter/>}/>
                    <Route path="/temperature" element={<Temperature/>}/>
                    <Route path="/search" element={<Search/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;



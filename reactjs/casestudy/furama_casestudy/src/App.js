import './App.css';
import {Route, Routes} from "react-router-dom"
import HeaderComponent from './components/HeaderComponent';
import ListProduct from "./components/ListProduct";
import AddComponent from "./components/AddComponent";
import EditComponent from "./components/EditComponent";
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <>
            <ToastContainer/>
            <HeaderComponent/>
            <Routes>
                <Route path={'/home/add'} element={<AddComponent/>}></Route>
                <Route path={'/home'} element={<ListProduct/>}></Route>
                <Route path={'/home/edit/:id'} element={<EditComponent/>}></Route>
            </Routes>
        </>
    );
}

export default App;
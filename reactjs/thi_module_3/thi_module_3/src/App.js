import './App.css';
import {Route, Routes} from "react-router-dom"
import HeaderComponent from './components/HeaderComponent';
import ListProduct from "./components/ListProduct";
import AddComponent from "./components/AddComponent";
import EditComponent from "./components/EditComponent";
import {ToastContainer} from "react-toastify";
import ProductDetail from "./components/ProductDetail";

function App() {
    return (
        <>
            <ToastContainer/>
            <HeaderComponent/>
            <Routes>
                <Route path={'/home/create'} element={<AddComponent/>}></Route>
                <Route path={'/home'} element={<ListProduct/>}></Route>
                <Route path={'/home/edit/:id'} element={<EditComponent/>}></Route>
                <Route path={'/home/detail/:id'} element={<ProductDetail/>}></Route>
            </Routes>
        </>
    );
}

export default App;
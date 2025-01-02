import './App.css';
import {Route, Routes} from "react-router-dom"
import HeaderComponent from './components/HeaderComponent';
import ListFacilities from "./components/ListFacilities";
import AddComponent from "./components/AddComponent";
import EditComponent from "./components/EditComponent";
import {ToastContainer} from "react-toastify";
import './assets/style.css';


function App() {
    return (
        <>
            <ToastContainer/>
            <HeaderComponent/>
            <Routes>
                <Route path={'/home/add'} element={<AddComponent/>}></Route>
                <Route path={'/home'} element={<ListFacilities/>}></Route>
                <Route path={'/home/edit/:id'} element={<EditComponent/>}></Route>
            </Routes>
        </>
    );
}

export default App;
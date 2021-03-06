import { Component } from "react/cjs/react.production.min";
import {Route, Routes} from 'react-router-dom';
import Home from "./Home";
import About from './About';
import Contact from "./Contact";
import Product from "./Product";
import UserRegister from "./UserRegister";
import UserLogin from "./UserLogin";
import ViewProduct from "./ViewProducts";
import UpdateProduct from "./UpdateProduct";

// class based component
class Mid extends Component {
    render() {
        return(
            <div>
                <Routes>
                    <Route path="/" element={<Home></Home>} />
                    <Route path="/About" element={<About></About>}/>
                    <Route path="/Contact" element={<Contact></Contact>}/>
                    <Route path="/Product/:id" element={<Product></Product>}/>
                    <Route path="/User/Register" element={<UserRegister></UserRegister>}/>
                    <Route path="/View/Product" element={<ViewProduct/>}/>
                    <Route path="/Update/Product/:ProductId" element={<UpdateProduct/>}/>
                    <Route path="/User/Login" element={<UserLogin></UserLogin>}/>
                </Routes>
            </div>
        )
    }
}

export default Mid;
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
const header =
    <nav className="navbar bg-body-tertiary">
        <form className="container-fluid justify-content-start">
            <button className="btn btn-outline-success me-2" type="button">Login</button>
            <button className="btn btn-sm btn-outline-secondary" type="button">Register</button>
        </form>
    </nav>
const content = <div className="container d-flex align-items-center text-center">
    <div className="form-signin">
        <form>
            <img className="mb-4"
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
                 alt="" width="100" height="80"/>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <div className="form-floating">
                <input type="email" className="form-control email" id="floatingInput" placeholder="name@example.com"/>
                <label>Email address</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control password" id="floatingPassword" placeholder="Password"/>
                <label>Password</label>
            </div>
            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox"/> Remember me
                </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
        </form>
    </div>
</div>

const divElement = <div>
    {header}
    {content}
</div>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(divElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

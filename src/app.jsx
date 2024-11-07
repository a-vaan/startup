import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Create } from './create/create';
import { Comment } from './comment/comment';

export default function App() {
    return (
        <BrowserRouter>
            <div className="body bg-dark text-light">
                <header className="container-fluid">
                    <nav className="navbar fixed-top navbar-dark">
                        <div className="navbar-brand" href="#">
                            Simply Cinema<sup>&reg;</sup>
                        </div>
                        <menu className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className='nav-link' to='login'>
                                    Login
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className='nav-link' to='create'>
                                    TV Shows/Movies
                                </NavLink>
                            </li>
                        </menu>
                    </nav>
                </header>

                <Routes>
                    <Route path='/' element={<Login />} exact />
                    <Route path='/login' element={<Login />} />
                    <Route path='/create' element={<Create />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

                <footer className="bg-dark text-white-50">
                    <div className="container-fluid">
                        <span className="text-reset">Andrew Van Valkenburgh</span>
                        <a className="text-reset" href="https://github.com/a-vaan/startup">
                            Github Repo
                        </a>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}
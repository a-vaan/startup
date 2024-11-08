import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Create } from './create/create';
import { Comment } from './comment/comment';
import { AuthState } from './login/authState';

export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

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
                                <NavLink className='nav-link' to=''>
                                    Login
                                </NavLink>
                            </li>
                            {authState === AuthState.Authenticated && (
                                <li className="nav-item">
                                    <NavLink className='nav-link' to='create'>
                                        TV Shows/Movies
                                    </NavLink>
                                </li>
                            )}
                        </menu>
                    </nav>
                </header>

                <Routes>
                    <Route path='/' element={<Login 
                        userName={userName}
                        authState={authState}
                        onAuthChange={(userName, authState) => {
                          setAuthState(authState);
                          setUserName(userName);
                        }}
                    />} exact />
                    <Route path='/create' element={<Create userName={userName}/>} />
                    <Route path='/comment' element={<Comment />} />
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
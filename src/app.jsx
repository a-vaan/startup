import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
        <div className="body bg-dark text-light">
            <header className="container-fluid">
                <nav className="navbar fixed-top navbar-dark">
                    <div className="navbar-brand" href="#">
                        Simply Cinema<sup>&reg;</sup>
                    </div>
                    <menu className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="index.html">
                                Login
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="create.html">
                                TV Shows/Movies
                            </a>
                        </li>
                    </menu>
                </nav>
            </header>

            <main>App components go here</main>

            <footer className="bg-dark text-white-50">
                <div className="container-fluid">
                    <span className="text-reset">Andrew Van Valkenburgh</span>
                    <a className="text-reset" href="https://github.com/a-vaan/startup">
                        Github Repo
                    </a>
                </div>
            </footer>
        </div>
    );
}
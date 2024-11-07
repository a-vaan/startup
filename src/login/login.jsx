import React from 'react';
import './login.css';

export function Login() {
    return (
        <main className="container-fluid bg-secondary text-center">
            <div className="top-banner">
                <h1>Welcome to Simply Cinema!</h1>
                <h3>"If you forced someone to do something they didn’t want to do, they’d just end up hating life."</h3>
                <h4>- Chihiro Sengoku, Sakurasou no Pet na Kanojo</h4>
            </div>

            <div className="picture-form">
                <img src="../../film_pic_1.jpg" alt="Film Pic 1" className="picture"></img>

                <form method="get" action="create.html">
                <div className="input-group mb-3">
                    <input className="form-control" type="text" placeholder="Username" />
                </div>
                <div className="input-group mb-3">
                    <input className="form-control" type="password" placeholder="Password" />
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <button type="submit" className="btn btn-secondary">Register</button>
                </div>
                </form>

                <img src="../../film_pic_2.jpg" alt="Film Pic 2" className="picture"></img>
            </div>
        </main>
    );
}
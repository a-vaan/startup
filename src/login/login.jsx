import React from 'react';
import './login.css';

export function Login() {
    const [quote, setQuote] = React.useState('Loading...');
    const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

    React.useEffect(() => {
        setQuote('If you forced someone to do something they didn’t want to do, they’d just end up hating life.');
        setQuoteAuthor('Chihiro Sengoku, Sakurasou no Pet na Kanojo');
      }, []);

    return (
        <main className="container-fluid bg-secondary text-center">
            <div className="top-banner">
                <h1>Welcome to Simply Cinema!</h1>
                <h3 className='quote'>{quote}</h3>
                <h4 className='quoteAuthor'>{quoteAuthor}</h4>
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
import React from 'react';
import './login.css';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Login({ userName, authState, onAuthChange}) {
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

                <div>
                    {authState !== AuthState.Unknown}
                    {authState === AuthState.Authenticated && (
                        <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
                    )}
                    {authState === AuthState.Unauthenticated && (
                        <Unauthenticated
                            userName={userName}
                            onLogin={(loginUserName) => {
                                onAuthChange(loginUserName, AuthState.Authenticated);
                            }}
                        />
                    )}
                </div>

                <img src="../../film_pic_2.jpg" alt="Film Pic 2" className="picture"></img>
            </div>
        </main>
    );
}
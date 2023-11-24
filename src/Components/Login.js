import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function LoginPage(props) {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [authenticated, setAuthenticated] =
        useState(localStorage.getItem(localStorage.getItem("authenticated") || false));
    // при появлении true будет всегда true
    const user = [{ username: 'admin', pass: '123' }];

    if ((props.userInput === user[0].username) && (props.passInput === user[0].pass)) {
        localStorage.setItem('authenticated', true);
    }


    return (
        <div className='login'>
            <form>
                <div className='main'>
                    <label htmlFor="userName">Login:</label>
                    <input
                        id='userName'
                        type="text"
                        className='frame'
                        name='userName'
                        placeholder='Input username'
                        autoComplete="true" />
                </div>

                <div>
                    <label htmlFor="password" className='main'>Password:</label>
                    <input
                        id='password'
                        type="password"
                        className='frame'
                        name='password'
                        placeholder='Input password'
                        autoComplete="true" />
                </div>

                <div>
                    <label htmlFor="email" className='main'>Email:</label>
                    <input
                        id='email'
                        type="email"
                        className='frame'
                        name='email'
                        placeholder='Input email'
                        autoComplete="true" />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default LoginPage;
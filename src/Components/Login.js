import React, { useState } from 'react';
import Cookies from 'js-cookie'

function LoginPage(props) {
    const [dataFromNode, setdataFromNode] = useState('Login Page');
    const [userName, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [mail, setMail] = useState('');

    const headers = new Headers();

    async function clickHandler() {
        try {
            const response = await fetch('http://localhost:3500/login', {
                method: 'POST',
                body: JSON.stringify({ userName, mail, pass }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status == 200) {//200
                const data = await response.json();

                Cookies.set('accessToken', data.token, { path: '/' });
                setdataFromNode(data.message);

                //НЕ устанавливается  
                // headers.set('Authorization', `Bearer ${data.token}`);
            } else {
                const errorData = await response.json();
                setdataFromNode(errorData.message);
            }
        } catch (error) {
            console.error('Error:', error);
            setdataFromNode('Error during authentication');
        }
    }

    return (
        <div className='login'>
            <h2 className='scale-up-center main'>{dataFromNode}</h2>
            <form>
                <div className='main'>
                    <label htmlFor="userName">Login:</label>
                    <input
                        id='userName'
                        type="text"
                        className='frame'
                        name='userName'
                        placeholder='Input username'
                        autoComplete="true"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password" className='main'>Password:</label>
                    <input
                        id='password'
                        type="password"
                        className='frame'
                        name='pass'
                        placeholder='Input password'
                        autoComplete="true"
                        onChange={(e) => setPass(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="email" className='main'>Email:</label>
                    <input
                        id='email'
                        type="email"
                        className='frame'
                        name='mail'
                        placeholder='Input email'
                        autoComplete="true"
                        onChange={(e) => setMail(e.target.value)}
                    />
                </div>
                <button
                    type="button"
                    onClick={clickHandler}
                >Login</button>
                <a className='registration_link' href='/register' >Registration</a>
            </form>
        </div>
    );
}

export default LoginPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage(props) {
    const [dataFromNode, setdataFromNode] = useState('Login Page');
    const [userName, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [mail, setMail] = useState('');
    const navigate = useNavigate();

    async function clickHandler() {
        try {
            const accessToken = await localStorage.getItem("accessToken");
            const response = await fetch('http://localhost:3500/login', {
                method: 'POST',
                body: JSON.stringify({ userName, mail, pass }),
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${accessToken}`// наверное можем назначать headers не здесь а в game
                },
            })

            if (response.status === 200) {
                const data = await response.json();
                let token = await localStorage.setItem("accessToken", data.token.accessToken);
                // headers.Authorization = `Bearer ${data.token.accessToken}`

                // здесь проверка  валидности токена
                // если токен валидный редирест на game
                // иначе удаление из локал storage и кудиресе на login
                setdataFromNode(data.message);
                navigate('/game');
            } else {
                const errorData = await response.json();
                setdataFromNode(errorData.message);
            }
        } catch (error) {
            console.error('Error:', error);
            setdataFromNode('Введите верные данные или зарегестрируйтесь');
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
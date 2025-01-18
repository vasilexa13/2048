import React, { useState } from 'react';


function RegisterPage(props) {
    let [dataToDatabase, setdataToDatabase] = useState('Registration Page')
    const [userName, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [mail, setMail] = useState('');

    //передача данных из формы на сeрвер
    function clickHandler() {
        fetch('http://localhost:3500/register', {
            method: "POST",
            body: JSON.stringify({
                userName: userName,
                mail: mail,
                pass: pass
            }),
            headers: {
                "Content-Type": "application/json"
                // "Content-Type": "text/html"

            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setdataToDatabase(data.message)
            })
            .catch(error => console.error('Error:', error));
    }

    return (
        <div className='login'>
            <h2 className='scale-up-center main'>{dataToDatabase}</h2>
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
                        onChange={(e) => setUsername(e.target.value)} />
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
                        onChange={(e) => setPass(e.target.value)} />
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
                        onChange={(e) => setMail(e.target.value)} />
                </div>
                <button
                    type="button"
                    onClick={clickHandler}
                >Register</button>
            </form>
        </div>
    );
}

export default RegisterPage;
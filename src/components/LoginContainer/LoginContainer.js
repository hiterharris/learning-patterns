import { useState } from 'react';
import './LoginContainer.css';

const LoginContainer = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const login = e => {
        console.log({ 'username': username,'password': password });
    };
    
    return (
        <div className='LoginContainer'>
            <form onSubmit={login} className='LoginContainer_form'>
                <input className="LoginContainer_form_username" name='username' title='username' onChange={e => setUsername(e.currentTarget.value)} value={username}/>
                <input className="LoginContainer_form_password" name='password' title='password' onChange={e => setPassword(e.currentTarget.value)} value={password}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
  );
}

export default LoginContainer;
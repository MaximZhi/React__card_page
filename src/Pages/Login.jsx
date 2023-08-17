import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css';
import { useAuth } from '../MyCustomHooks/useAuth';
import MyInputButton from '../UI/MyCustomButtons/MyInputButton';
import MyTitleInput from '../UI/MyCustomInput/MyTitleInput';


const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const {signin} = useAuth()

const fromPage = location.state?.form?.pathname || '/'

const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const user = form.username.value
    const password = form.userpassword.value
    signin(user, password, () => navigate(fromPage, {replace:true}))
}

    return ( 
        <div>
            <h1 style={{margin:'24px'}}>Login page</h1>
            <form onSubmit={handleSubmit}>
                <MyTitleInput name='username' type='text' placeholder='Login'/>
                <MyTitleInput name='userpassword' type='password' placeholder='Password'/>
                <MyInputButton type='submit'>sign in</MyInputButton>
            </form>
        </div>
     );
}
 
export default Login;
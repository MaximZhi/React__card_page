import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../MyCustomHooks/useAuth';
import MyInputButton from '../UI/MyCustomButtons/MyInputButton';


const About = () => {
const {signout} = useAuth()
const navigate = useNavigate()
  return (
    <div className="App">
<h1>Some information about our company</h1>
<MyInputButton onClick = {() => signout(() => navigate('/login', {replace:true}))}>Sign Out</MyInputButton>
    </div>
  );
}

export default About;

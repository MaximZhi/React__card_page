import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../hoc/AuthProvider';
import { PrivateRoute } from '../hoc/PrivateRoute';
import About from './About';
import Login from './Login';
import PostIdPage from './PostIdPage';
import Posts from './Posts';

const AppRouter = () => {
    return ( 
<AuthProvider>
        <Routes>
    <Route path='/*' element={<Navigate to = '/about'/>}/>
    <Route path='/about' element={
        <PrivateRoute>
    <About/>
        </PrivateRoute>
    }/>
    <Route path='/posts' element={
        <PrivateRoute>
    <Posts/>
        </PrivateRoute>
    }/>
    <Route path='/posts/:id' element={<PostIdPage/>}/>
    <Route path='/login' element={<Login/>}/>
    </Routes>
</AuthProvider>
     );
}
 
export default AppRouter;
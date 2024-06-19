import React from 'react';
import './Login.css';
import { accessUrl } from './Spotify';

function Login1() {
  return (
    <div className='login'>
    
    <img src='spotify1.jpg' alt='spotify'></img>
    <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login1

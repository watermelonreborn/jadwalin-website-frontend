import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import '../static/css/pages/Home.css';
import Button from '../components/Button';

export default function Home() {
    const [toggleLogin, setToggleLogin] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const isMounted = useRef(false);
    const navigate = useNavigate();
    const baseAuthURL = process.env.REACT_APP_AUTH_URL;

    useEffect(() => {
        if (sessionStorage.getItem('access_token') !== null) {
            navigate('/code');
        } 
        const fetchGoogleToken = async () => {
            const response = await axios({
                method: 'get',
                url: baseAuthURL + '/callback',
                params: {
                    state: searchParams.get('state'),
                    code: searchParams.get('code')
                }
            });
            sessionStorage.setItem('access_token', response.data.data.access_token);
            navigate('/code');
        }

        if (searchParams.has('state') && searchParams.has('code')) {
            fetchGoogleToken();
        }
    }, []);

    useEffect(() => {
        if (isMounted.current && toggleLogin) {
            window.location.replace(baseAuthURL + '/auth');
        } else {
            isMounted.current = true;
        }
    }, [toggleLogin])

    return (
        <div className='main-container'>
            <div className='branding-container'>
                <img className='jadwalin-logo-sm' src={require('../static/img/jadwalin-logo.png')} alt='jadwal.in logo'></img>
                <div className='branding-content'>
                    <img src={require('../static/img/calendar-amico.png')} alt='calendar illustration'></img>
                </div>
            </div>
            <div className='content-container'>
                <div className='intro-container'>
                    <h1 className='title'>Welcome to Jadwal.in</h1>
                    <p>Your <span>Discord bot</span> with <span>Google Calendar</span> extension.</p>
                    <Button logo={'google'} text={'Log in with Google'} func={() => setToggleLogin(true)}></Button>
                </div>
            </div>
        </div>
    )
}

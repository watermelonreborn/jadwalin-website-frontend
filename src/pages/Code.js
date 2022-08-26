import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import Button from '../components/Button';
import '../static/css/pages/Code.css';

export default function Code() {
    const [discordCode, setDiscordCode] = useState();
    const [toggleLogout, setToggleLogout] = useState(false);
    const navigate = useNavigate();
    const baseUserURL = process.env.REACT_APP_USER_URL;
    const discordBotInviteURL = 'https://discord.com/api/oauth2/authorize?client_id=1010722014690017310&permissions=8&scope=bot';
    
    useEffect(() => {
        if (sessionStorage.getItem('access_token') === null) {
            navigate('/');
        }
        const fetchDiscordCode = async () => {
            const response = await axios({
                method: 'get',
                url: baseUserURL + '/api/user/code',
                headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem('access_token'),
                }
            });
            setDiscordCode(response.data.data);
        }
        fetchDiscordCode();
    }, []);

    useEffect(() => {
        if (toggleLogout) {
            sessionStorage.removeItem('access_token');
            navigate('/');
        }
    }, [toggleLogout]);

    return (
        <div className='main-container--codepage'>
            <nav className='navbar'>
                <img className="jadwalin-logo-sm" src={require('../static/img/jadwalin-logo.png')} alt='jadwal.in logo'></img>
                <ul className='navbar__list'>
                    <li className='navbar__item'>Hi, stranger!</li>
                    <img onClick={() => setToggleLogout(true)} className="navbar__icon" src={require('../static/img/logout.png')} alt='logout icon'></img>
                </ul>
            </nav>
            <div className='sub-container code-one'>
                <h1 className='title'>Here is your Discord code, use it wisely! 👇</h1>
                <div className='discord-code-container'>
                    <p>{discordCode}</p>
                </div>
            </div>
            <div className='sub-container code-two'>
                <h1 className='title'>If you haven't, invite Jadwal.in bot to your Discord server.</h1>
                <Button logo={'discord'} text={'Invite Jadwal.in'} func={() => window.open(discordBotInviteURL)}></Button>
            </div>
        </div>

    )
}

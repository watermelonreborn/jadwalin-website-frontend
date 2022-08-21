import Button from '../components/Button';
import '../static/css/pages/Home.css';
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='main-container'>
            <div className='branding-container'>
                <img className="jadwalin-logo-sm" src={require('../static/img/jadwalin-logo.png')} alt='jadwal.in logo'></img>
                <div className='branding-content'>
                    <img src={require('../static/img/calendar-amico.png')} alt='calendar illustration'></img>
                </div>
            </div>
            <div className='content-container'>
                <div className='intro-container'>
                    <h1 className='title'>Welcome to Jadwal.in</h1>
                    <p>Your <span>Discord bot</span> with <span>Google Calendar</span> extension.</p>
                </div>
                <Link to={"/connect"}><Button logo={'google'} text={'Login with Google'}></Button></Link>
            </div>
        </div>
    )
}

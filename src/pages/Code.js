import Button from '../components/Button';
import '../static/css/pages/Code.css';
import { Link } from 'react-router-dom'

export default function Code() {
    return (
        <div className='main-container--codepage'>
            <nav className='navbar'>
                <img className="jadwalin-logo-sm" src={require('../static/img/jadwalin-logo.png')} alt='jadwal.in logo'></img>
                <ul className='navbar__list'>
                    <li className='navbar__item'>Hi, stranger!</li>
                    <Link to={"/"}><img className="navbar__icon" src={require('../static/img/logout.png')} alt='logout icon'></img></Link>
                </ul>
            </nav>
            <div className='sub-container code-one'>
                <h1 className='title'>Here is your Discord code, use it wisely! 👇</h1>
                <div className='discord-code-container'>
                    <p>upcoming-discord-code-here</p>
                </div>
            </div>
            <div className='sub-container code-two'>
                <h1 className='title'>If you haven't, invite Jadwal.in bot to your Discord server.</h1>
                <Link to={"/"}><Button logo={'discord'} text={'Invite Jadwal.in'}></Button></Link>
            </div>
        </div>

    )
}

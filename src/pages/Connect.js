import Button from '../components/Button';
import '../static/css/pages/Connect.css';
import { Link } from 'react-router-dom'

export default function Connect() {
    return (
        <div className='main-container'>
            <div className='branding-container--connect'>
                <img className="jadwalin-logo-sm" src={require('../static/img/jadwalin-logo.png')} alt='jadwal.in logo'></img>
                <div className='branding-content--connect'>
                    <img src={require('../static/img/agreement-gcal-dc-amico.png')} alt='calendar illustration 2'></img>
                </div>
            </div>
            <div className='content-container--connect'>
                <div className='intro-container'>
                    <h1 className='title'>Almost there...</h1>
                    <p>Please login further with your <span>Discord account</span> to obtain code for interacting with <span>Jadwal.in bot.</span></p>
                </div>
                <Link to={"/code"}><Button logo={'discord'} text={'Login with Discord'}></Button></Link>
            </div>
        </div>
    )
}

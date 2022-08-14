import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className='main-container'>
      <div className='branding-container'>
        <img className="jadwalin-logo-sm" src={require('./static/img/jadwalin-logo.png')} alt='jadwal.in logo'></img>
        <div className='branding-content'>
          <img src={require('./static/img/calendar-amico.png')} alt='calendar illustration'></img>
        </div>
      </div>
      <div className='auth-container'>
        <div className='intro-container'>
          <h1 className='title'>Welcome to Jadwal.in</h1>
          <h3>Your Discord bot with Google Calendar extension.</h3>
        </div>
        <Button logo={'google'} text={'Login with Google'}></Button>
      </div>
    </div>
    
  );
}

export default App;

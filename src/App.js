import './App.css';
import links from './links.js';

function App() {
  const renderLinks = () => {
    return (
      links.map(link => {
        return (
          <div className='item'>
            <a href={link.url}><i className={link.icon}></i>{link.title}</a>
          </div>
        );
      })
    );
  }

  return (
    <div className='main'>
      
      <div className='contents'>
        <div className="header">
          <div className='myPhoto'>
            <img src="/img/photo.jpg" alt="Adhy" />
          </div>
          <div className='myTitle'>
            <h1>Adhy Wiranto</h1>
            <p>Welcome to my own <b>Linktree</b>!</p>
          </div>
        </div>
        
        <div className="links">
          {renderLinks()}
        </div>
      </div>
      
      <div className='footer'>
        <small><b>My Linked</b> &#169; {new Date().getFullYear()}. Made with &#10084; By <a className="link-dark" href="https://github.com/adhywiranto44" target="_blank" rel="noreferrer">Adhy Wiranto</a></small>
      </div>
    </div>
  );
}
export default App;

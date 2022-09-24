import React from 'react';
import './App.css';
import LinkComponent from './components/LinkComponent';
import data from './links.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Adhy Wiranto",
      links: data.links
    }
  }

  renderLinks = () => {
    return (
      this.state.links.map(link => {
        return (
          <LinkComponent link={link} />
        );
      })
    );
  }

  render() {
    return (
      <div className='main'>

        <div className='contents'>
          <div className="header">
            <div className='myPhoto'>
              <img src="/img/photo.jpg" alt="Adhy" />
            </div>
            <div className='myTitle'>
              <h1>{this.state.name}</h1>
              <p>Welcome to my own <b>Linktree</b>!</p>
            </div>
          </div>

          <div className="links">
            {this.renderLinks()}
          </div>
        </div>

        <div className='footer'>
          <small><b>My Linked</b> &#169; {new Date().getFullYear()}. Made with &#10084; By <a className="link-dark" href="https://github.com/adhywiranto44" target="_blank" rel="noreferrer">Adhy Wiranto</a></small>
        </div>

      </div>
    )
  }
}

export default App;

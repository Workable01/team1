import React, { Component } from 'react';
import './sass/styles.css';
import '../node_modules/bulma/css/bulma.min.css';
import PopupOverlay from './PopupOverlay'

class App extends Component {
  state = {
    popupOpen: false
  }

  closePopup() {
    this.setState({ popupOpen: false })
  }

  render() {
    return (
      <>
        <header className="App-header">
        </header>
        <div className="container">
          <button className="button" onClick={() => this.setState({ popupOpen: !this.state.popupOpen })}>
            Open popup
          </button>
        </div>
        { this.state.popupOpen && 
          <PopupOverlay close={() => this.closePopup()} name="sad"></PopupOverlay> //arrow function to bind this to the App component
        }
      </>
    );
  }
}

export default App;

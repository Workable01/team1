import React, { Component } from 'react';
import './sass/styles.css';
import Popup from './Popup';

class PopupOverlay extends Component {
  render() {
    return (
      <div className="popupOverlay">
          <Popup {...this.props} />
      </div>
    );
  }
}

export default PopupOverlay;
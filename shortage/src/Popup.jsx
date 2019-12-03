import React, { Component } from 'react';
import './sass/styles.css';

class Popup extends Component {
    state = {
        popupOpen: true
    }
    closePopup() {
        this.setState({ popupOpen: false })
    }   
    render() {
        console.log(this.props);
        const { close, name } = this.props;
        return (
            <div className="popup">
                <button onClick={close}>{name}</button>
                ahoj popup
            </div>
        );
    }
}

export default Popup;
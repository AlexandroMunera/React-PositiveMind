import React from 'react';
import { Component } from 'react';
import './App.css';

import NotificationSystem from 'react-notification-system';
import { style } from "./variables/Variables.jsx";

class App extends Component {

  notificationSystem = React.createRef();  

  componentDidMount = () => {

    setInterval(this.mostrarCita, 1000);
    //this.mostrarCita(level,position)
  };

  mostrarCita = () => {

    var color = Math.floor(Math.random() * 4 + 1);
    var level;
    switch (color) {
      case 1:
        level = "success";
        break;
      case 2:
        level = "warning";
        break;
      case 3:
        level = "success";
        break;
      case 4:
        level = "info";
        break;
      default:
        break;
    }

    const positions = ['tr','tl','tc','br','bl','bc'];

    let position = positions[Math.floor(Math.random() * positions.length)];

    const notification = this.notificationSystem.current;

    notification.addNotification({
      title: <span data-notify="icon" className="pe-7s-gift" />,
      message: (
        <div>
          No olvides que querer ganar es importante pero lo es aun mas el prepararse para ganar.
        </div>
      ),
      level: level,
      position: position,
      autoDismiss: 15
    });
  }


  render() {
    return (

      <div className="App">
        <NotificationSystem ref={this.notificationSystem} style={style} />
      </div>
    );
  }
}

export default App;

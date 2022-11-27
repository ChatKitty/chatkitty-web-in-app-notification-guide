import logo from './logo.png';
import './App.css';
import { useEffect, useState } from 'react';
import { Button, Toast } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import chatkitty from "./chatkitty.js";

function App() {

  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: '', body: '' });
  const [isTokenFound, setTokenFound] = useState(false);

  const initialize = async () => {
    const result = await chatkitty.startSession({ username: 'c6f75947-af48-4893-a78e-0e0b9bd68580' });

    chatkitty.onNotificationReceived((notification) => {
        setNotification({ title: notification.title, body: notification.body })
        setShow(true);
    });

  }

  useEffect(() => {
    initialize().then();
  }, [])

  
  const onShowNotificationClicked = () => {
    setNotification({ title: "Notification", body: "This is a test notification" })
    setShow(true);
  }

  return (
    <div className="App">
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide animation style={{
        position: 'absolute',
        top: 20,
        right: 20,
        minWidth: 200
      }}>
        <Toast.Header>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded mr-2"
            alt=""
          />
          <strong className="mr-auto">{notification.title}</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>{notification.body}</Toast.Body>
      </Toast>
      <header className="App-header">
        {isTokenFound}
        {!isTokenFound}
        <img src={logo} className="App-logo" alt="logo" />
        <Button onClick={() => onShowNotificationClicked()}>Show Toast</Button>
      </header>

    </div>
  );
}

export default App;
   
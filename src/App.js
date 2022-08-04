import logo from './logo.svg';
import './App.css';
import { askForPermissioToReceiveNotifications, onMessageListener } from './push-notification';
import {useState} from "react";
import {Button, Row, Col, Toast} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

const [title, setTitle] = useState("");
const [body, setBody] = useState("");
const [show, setShow] = useState(false);

  onMessageListener().then(payload => {

      console.log(payload.notification.title);
      console.log(payload.notification.body);
      setTitle(payload.notification.title);
      setBody(payload.notification.body);
      setShow(true);
    }).catch(err => console.log('failed: ', err));

  return (
    <div className="App">

    <Toast onClose={() => setShow(false)} show={show} delay={10000} autohide animation style={{
        position: 'absolute',
        top: 20,
        right: 20,
      }}>

      <Toast.Header>
         <img
           src="holder.js/20x20?text=%20"
           className="rounded mr-2"
           alt=""
         />
         <strong className="mr-auto">{title}</strong>
         <small>12 mins ago</small>
       </Toast.Header>
       <Toast.Body>{body}</Toast.Body>
       </Toast>


    <button onClick={askForPermissioToReceiveNotifications} >
ask permission
</button>

    </div>
  );
}

export default App;

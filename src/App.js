import React, { Component } from 'react';
import { 
  Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, Glyphicon, Thumbnail,
  Grid, Col, Row 
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
       <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand className="custom-brand">
              <span><i className="fa fa-lightbulb-o fa-2x"></i> MindMap</span>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={3} title="Default MindMap" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>MindMap 1</MenuItem>
              <MenuItem eventKey={3.2}>MindMap 2</MenuItem>
              <MenuItem eventKey={3.3}>MindMap 3</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav>
            <Button className='custom-button'><Glyphicon glyph="plus" /> Add new</Button>
            <Button className='custom-button'><Glyphicon glyph="asterisk" /> Settings</Button>
          </Nav>
          <Nav pullRight>
            <NavDropdown eventKey={3} title={ <span><img src="favicon.ico" className="custom-avatar"/> Akaisama</span> } id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Profile</MenuItem>
              <MenuItem eventKey={3.2}>Setting</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Log out</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      

      <Draggable
        axis="x"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[25, 25]}
        zIndex={100}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200" className="handle custom-thumbnail">
          <h3>Thumbnail label</h3>
          <p>Description</p>
          <p>
            <Button bsStyle="primary">Button</Button>&nbsp;
            <Button bsStyle="default">Button</Button>
          </p>
        </Thumbnail>
      </Draggable>

    <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored custom-material-button">
      <i className="material-icons">add</i>
    </button>
    </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { 
  Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, Glyphicon, Thumbnail,
  Grid, Col, Row,
  Badge, Image
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time
import MicroBarChart from 'react-micro-bar-chart';

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
        axis="both"
        handle=".handle"
        position={null}
        zIndex={100}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div className="handle custom-node">
          <MicroBarChart
            data={[10, 20, 30, 40, 50]}
            width="200"
            height="50"
            tooltip
            tipOffset={[0,20]}
            tipTemplate={(d, i, data) => `value of ${d} at index ${i}, with ${data.length} data points`}
            hoverColor="rgb(161,130,214)"
            fillColor="rgb(210,193,237)" />
            <p>Today's performance <Badge>100%</Badge></p>
            <h3>Company</h3>
            <div>
                <Row className="custom-row">
                  <Col xs={2} md={2} className="custom-avatar">
                    <Image src="favicon.ico" thumbnail />
                  </Col>
                  <Col xs={2} md={2} className="custom-avatar">
                    <Image src="favicon.ico" thumbnail />
                  </Col>
                  <Col xs={2} md={2} className="custom-avatar">
                    <Image src="favicon.ico" thumbnail />
                  </Col>
                </Row>
            </div>
        </div>
      </Draggable>

    <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored custom-material-button">
      <i className="material-icons">add</i>
    </button>
    </div>
    );
  }
}

export default App;

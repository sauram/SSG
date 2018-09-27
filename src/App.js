import React, { Component } from 'react';
import './App.css';
import {Layout , Header, Navigation ,Drawer , Content} from 'react-mdl';
import Main from './Components/main';
//import {link} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header title="My Portfolio" scroll className="header-color">
            <Navigation>
              
              <a href="/Resume">Resume</a>
              <a href="/Aboutme">AboutMe</a>
              <a href="/Projects">Projects</a>
              <a href="/Contact">Contact</a>
            </Navigation>
          </Header>
          <Drawer title="My Portfolio">
            <Navigation>
              <a href="/Resume">Resume</a>
              <a href="/Aboutme">AboutMe</a>
              <a href="/Projects">Projects</a>
              <a href="/Contact">Contact</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;

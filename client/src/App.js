import React, { Component } from 'react';
import './App.css';
import routes from './routes'
import Nav from './components/Nav/Nav'



class App extends Component {
  render() {
    // console.log("app props", this.props)
    return (
      <div className="App">
        <Nav history={this.props.history} />
        {routes}
      </div>
    );
  }
}

export default App;

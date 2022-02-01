import React, { Component } from 'react';
import Navbar from './components/Navbar';
import ClassList from './components/ClassList'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count:0
    }
  }

  incrementTotalCount = () => {
    console.log('The button has been clicked')
    const newCount = this.state.count
    this.setState({
      count: newCount
    })
  }

  render() {
    return (
      <>
        <Navbar />
          <div className='container'>
            <ClassList />
          </div>
      </>
    );
  }
}

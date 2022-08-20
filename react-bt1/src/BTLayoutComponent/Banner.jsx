import React, { Component } from 'react'

export default class 
 extends Component {
  render() {
    const border={
      borderRadius:'15px',
      backgroundColor: '#f8f9fa',
      padding:'80px'
    }
    const font={
          fontSize:'50px',
          fontWeight:'700'
    }
    return (
      <div>
        <div style={border} className="container text-center">
          <h1 style={font}>A warm welcome!</h1>
          <p style={{fontSize:'20px'}}>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
          <button style={{fontSize:'20px'}} className='btn btn-primary'>Call to action</button>
        </div>
      </div>
    )
  }
}

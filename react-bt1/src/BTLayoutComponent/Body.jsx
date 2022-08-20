import React, { Component } from 'react'
import Banner from './Banner'
import Item from './Item'

export default class  extends Component {
  render() {
    return (
      <div className=' px-5'>
          <Banner/>
          <Item/>
      </div>
    )
  }
}

import React, { Component } from 'react'
import Banner from './Banner'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'
import Item from './Item'

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Body/>
          <Footer/>
      </div>
    )
  }
}

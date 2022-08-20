import React, { Component } from 'react'
export default class Item extends Component {
  render() {
    const border={
      borderRadius:'15px',
      backgroundColor: '#f8f9fa',
      padding:'80px'
    }
    const iCon={
      width:'50px',
      height:'50px',
      backgroundColor:'blue',
      color:'white',
      lineHeight:'50px',
      borderRadius:'5px',
      position:'absolute',
      top:'-25px',
      right:'45%',
      left:'45%',
    }
    return (
      <div>
          <div className="container mt-5">
            <div  className="row text-center gx-lg-5">
              <div className="col-xl-4 col-sm-6  mb-4 p-2">
                <div style={border} className="item   p-5">
                <h4>Fresh new layout</h4>
                <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                <i style={iCon} class="fa-solid fa-wifi"></i>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6   mb-4 p-2">
                <div style={border} className="item   p-5">
                <h4>Free to download</h4>
                <p>As always, Start Bootstrap has a powerful collectin of free templates.</p>
                <i style={iCon} class="fa-solid fa-cloud"></i>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6  mb-4 p-2">
                <div style={border} className="item  p-5">
                <h4>Jumbotron hero header</h4>
                <p>The heroic part of this template is the jumbotron hero header!</p>
                <i style={iCon} class="fa-solid fa-address-card"></i>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6  mb-4 p-2">
                <div style={border} className="item   p-5">
                <h4>Feature boxes</h4>
                <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                <i style={iCon} class="fa-solid fa-b"></i>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6   mb-4 p-2">
                <div style={border} className="item   p-5">
                <h4>Simple clean code</h4>
                <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                <i style={iCon} class="fa-solid fa-code"></i>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6   mb-4 p-2">
                <div style={border} className="item   p-5">
                <h4>A name you trust</h4>
                <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                <i style={iCon} class="fa-solid fa-check"></i>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

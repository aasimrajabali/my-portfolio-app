import React, { Component } from 'react'

export default class Introduction extends Component {
	render() {
	    return (       
	      <section id="colorlib-hero" className="js-fullheight" data-section="home" style={{height: '659px'}}>
	        <div className="flexslider js-fullheight" style={{height: '659px'}}>
	          <ul className="slides">
	            <li style={{backgroundImage: 'url(images/img_bg_2.jpg)', width: '100%', float: 'left', marginRight: '-100%', position: 'relative', opacity: 0, display: 'block', zIndex: 1}} className data-thumb-alt>
	              <div className="overlay" />
	              <div className="container-fluid">
	                <div className="row">
	                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text" style={{height: '659px'}}>
	                    <div className="slider-text-inner js-fullheight" style={{height: '659px'}}>
	                      <div className="desc">
	                        <h1>Hi! <br />I'm Aasim</h1>
	                        <p><a href="./resume/Rajabali-Aasim-Resume_2019.pdf" download className="btn btn-primary btn-learn">Download Resume <i className="icon-download" /></a></p>
	                      </div>
	                    </div>
	                  </div>
	                </div>
	              </div>
	            </li>
	            <li style={{backgroundImage: 'url(images/img_bg_3.jpg)', width: '100%', float: 'left', marginRight: '-100%', position: 'relative', opacity: 1, display: 'block', zIndex: 2}} data-thumb-alt className="flex-active-slide">
	              <div className="overlay" />
	              <div className="container-fluid">
	                <div className="row">
	                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text animated fadeInUp" style={{height: '659px'}}>
	                    <div className="slider-text-inner">
	                      <div className="desc">
	                        <h1>I'm an Aspiring<br />Tech</h1>
	                        {/*<h2>100% html5 bootstrap templates Made by <a href="https://colorlib.com/" target="_blank">colorlib.com</a></h2>*/}
	                        <p><a href="./resume/Rajabali-Aasim-Resume_2019.pdf" download className="btn btn-primary btn-learn">Download Resume <i className="icon-download" /></a></p>
	                      </div>
	                    </div>
	                  </div>
	                </div>
	              </div>
	            </li>
	          </ul>
	       </div>
	      </section>
	      )
	    }
	  }
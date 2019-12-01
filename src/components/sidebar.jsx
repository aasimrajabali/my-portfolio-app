import React, { Component } from 'react'

export default class Sidebar extends Component {
	render() {
	    return (      
	    <div>
	        <div>
	          <nav href="#navbar" classname="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
	            <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
	              <div className="text-center">
	                <div className="author-img" style={{backgroundImage: 'url(images/img_bg_1.jpg)'}} />
	                <h1 id="colorlib-logo"><a href="index.html">Aasim Rajabali</a></h1>
	                <span className="position">Technology Enthusiast in Austin, Texas</span>
	              </div>
	              <nav id="colorlib-main-menu" role="navigation" className="navbar">
	                <div id="navbar" className="collapse">
	                  <ul>
	                    <li className="active"><a href="#" data-nav-section="home">Home</a></li>
	                    <li><a href="#" data-nav-section="about">About</a></li>
	                    <li><a href="#" data-nav-section="career">Career</a></li>
	                    <li><a href="#" data-nav-section="skills">Skills</a></li>
	                    <li><a href="#" data-nav-section="experience">Experience</a></li>
	                    <li><a href="#" data-nav-section="education">Education</a></li>
	                    {/*<li><a href="#" data-nav-section="work">Work</a></li>
	                    <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
	                    <li><a href="#" data-nav-section="contact">Contact</a> </li>
	                    <li><a href="#"><i className="icon-facebook2" /></a><span> </span>
	                    	<a href="https://github.com/aasimrajabali" target="_blank"><i className="icon-github" /></a><span> </span>
	                    	<a href="https://linkedin.com/in/aasimrajabali"><i className="icon-linkedin2" /></a>
	                    </li>
	     	          </ul>
	                </div>
	              </nav>
	              <div className="colorlib-footer">
	                <span>Credit: <a href="https://colorlib.com/" target="_blank">Colorlib.com</a> for the inspiration</span>
	              </div>
	            </aside>
	        
	    	</div>
		</div>
		)
	}
}
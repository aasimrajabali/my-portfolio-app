import React, { Component } from 'react'

export default class About extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-about" data-section="about">
		            <div className="colorlib-narrow-content">
		              <div className="row">
		                <div className="col-md-12">
		                  <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
		                    <div className="col-md-12">
		                      <div className="about-desc">
		                        <h2 className="colorlib-heading">About Me</h2>
		                        <p>I'm a Tech Enthusiast with a Mathematics Degree from the University of Texas at Austin. I've always prided myself by having a diverse background, and with experience in Retail, Finance, IT/Web Development, Analytics, and Quality Assurance I've been able to further narrow down what I see as my career.</p>
		                        <p>As vague as it sounds, I love building things and solving other people's problems. From when I was 11 years old reverse-engineering a laptop to now, I've always had a curious mind. Whether it's through a computer or with my own hands, I get satisfaction out of working in a team to build something that can impact society for the better.</p>
		                        <p>One day I'd like to design my own smart house (not like the movie), physically built by me and implemented with home automation I would design.</p>
		                        <p>To help me reach those goals, I'm currently looking for careers in IT, Web Development, UI/UX, Software Design, Data Analytics, or Data Science!</p>
		                      </div>
		                    </div>
		                  </div>
		                </div>
		              </div>
		            </div>
          		</section>
				<section className="colorlib-about" data-section="career">
			        <div className="colorlib-narrow-content">
			            <div className="row">
				            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
				                <h2 className="colorlib-heading">Fields I Specialize In</h2>
				            </div>
			            </div>
			            <div className="row row-pt-md">
				            <div className="col-md-4 text-center animate-box">
				                <div className="services color-1">
				                <span className="icon">
				                    <i className="icon-bulb" />
				                </span>
				                <div className="desc">
				                    <h3>Web Development</h3>
				                    <p>I have experience building websites and applications using JavaScript,React,HTML,CSS, Python and Flask</p>
				                </div>
				                </div>
				            </div>
				            <div className="col-md-4 text-center animate-box">
				                <div className="services color-2">
				                <span className="icon">
				                    <i className="icon-phone3" />
				                </span>
				                <div className="desc">
				                    <h3>Data Structures & Algorithms</h3>
				                    <p>Coming from a partial CS background, I have good grasp over fundamental concepts of DSA</p>
				                </div>
				                </div>
				            </div>
				            <div className="col-md-4 text-center animate-box">
				                <div className="services color-5">
				                <span className="icon">
				                    <i className="icon-data" />
				                </span>
				                <div className="desc">
				                    <h3>Data Analytics/Machine Learning</h3>
				                    <p>Experience in taking raw data/web-scraping data and turning it into something usable; looking to take the same contact and branch out into ML</p>
				                </div>
				                </div>
					        </div>
			            </div>
			        </div>
				</section>
			</div>
		)
	}
}
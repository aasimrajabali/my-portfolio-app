import React, { Component } from 'react'

export default class Experience extends Component {
	render() {
    return (
      <section className="colorlib-experience" data-section="experience">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
              <h2 className="colorlib-heading animate-box fadeInUp animated">Work Experience</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">
                <article className="timeline-entry animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="logo-entry">
                      <i className="logo-img" style={{backgroundImage: 'url(images/waymo.png)'}}/>
                    </div>
                    <div className="timeline-label">
                      <h2><a href="#">Fleet Response Specialist - Contract</a> <span>Apr 2018 - Nov 2019
                      <p><span>Waymo, on behalf of Genesis10</span></p></span></h2>
                      <p></p>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="logo-entry">
                      <i className="logo-img" style={{backgroundImage: 'url(images/embarkenergy2.png)'}}/>
                    </div>
                    <div className="timeline-label">
                      <h2><a href="#">Business Analyst - Contract</a> <span>Aug 2017 - Jan 2018
                      <p><span>Embark Energy, LLC</span></p></span></h2>
                      <p></p>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box fadeInRight animated" data-animate-effect="fadeInRight">
                  <div className="timeline-entry-inner">
                    <div className="logo-entry">
                      <i className="logo-img" style={{backgroundImage: 'url(images/mediascience.png)'}}/>
                    </div>
                    <div className="timeline-label">
                      <h2><a href="#">Research Intern/Associate</a> <span>Jan 2016 - Nov 2017
                      <p><span>Mediascience</span></p></span></h2>
                      <p></p>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box fadeInUp animated" data-animate-effect="fadeInTop">
                  <div className="timeline-entry-inner">
                    <div className="logo-entry">
                      <i className="logo-img" style={{backgroundImage: 'url(images/utaustin.jpg)'}}/>
                    </div>
                    <div className="timeline-label">
                      <h2><a href="#">IT Assistant</a> <span>Aug 2015 - Aug 2016
                      <p><span>The University of Texas at Austin</span></p></span></h2>
                      <p></p>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="logo-entry">
                      <i className="logo-img" style={{backgroundImage: 'url(images/wellsfargo.jpg)'}}/>
                    </div>
                    <div className="timeline-label">
                      <h2><a href="#">Teller</a> <span>May 2013 - Dec 2013
                      <p><span>Wells Fargo</span></p></span></h2>
                      <p></p>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="logo-entry">
                      <i className="logo-img" style={{backgroundImage: 'url(images/panda.png)'}}/>
                    </div>
                    <div className="timeline-label">
                      <h2><a href="#">Supervisor</a> <span>Aug 2010 - Aug 2012
                      <p><span>Panda Express</span></p></span></h2>
                      <p></p>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry begin animate-box fadeInUp animated" data-animate-effect="fadeInBottom">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-none">
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
	}
}
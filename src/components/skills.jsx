import React, { Component } from 'react'

export default class Skills extends Component {
	render() {
	  return (
      <section className="colorlib-skills" data-section="skills">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
              <h2 className="colorlib-heading animate-box fadeInUp animated">More Skills</h2>
            </div>
          </div>

          <div className="row row-pt-md">
            <div className="col-md-6 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
              <div className="progress-wrap">
                <h3>JavaScript (ES6) <span className="icon"><i class="devicon-javascript-plain"></i></span></h3>
                <h3>React (JSX) <span className="icon"><i className="devicon-react-original" /></span></h3>
                <h3>HTML5 <span className="icon"><i className="icon-html-five2" /></span></h3>
                <h3>CSS3 <span className="icon"><i className="icon-css3" /></span></h3>
                <h3>Bootstrap <span className="icon"><i class="devicon-bootstrap-plain"></i></span></h3>
                <h3>SQL (MySQL, PostgreSQL) <span className="icon"><i class="devicon-mysql-plain"></i> <i class="devicon-postgresql-plain"></i></span></h3>  
              </div>
            </div>
            <div className="col-md-6 animate-box fadeInRight animated" data-animate-effect="fadeInRight">
              <div className="progress-wrap">
                <h3>Python(Flask,pandas,numpy,matplotlib) <span className="icon"><i class="devicon-python-plain"></i></span></h3>
                <h3>Django <span className="icon"><i class="devicon-django-plain"></i></span></h3>
                <h3>Linux (Ubuntu) <span className="icon"><i class="devicon-ubuntu-plain"></i></span></h3>
                <h3>Microsoft Excel <span className="icon"><i className="icon-file-excel" /></span></h3>
                <h3>Git <span className="icon"><i className="icon-git" /></span></h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
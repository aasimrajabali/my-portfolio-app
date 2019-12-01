import React, { Component } from 'react'

export default class Education extends Component {
	render() {
    return (
      <section className="colorlib-education" data-section="education">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
              <h2 className="colorlib-heading animate-box fadeInUp animated">Education</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
              <div className="fancy-collapse-panel">
                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Bachelor's of Science and Arts in Mathematics
                        </a>
                      </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                      <div className="panel-body">
                        <div className="row">
                          <div className="col-md-6">
                            <p>Received December 2016 from The University of Texas at Austin.</p>
                          </div>
                          <div className="col-md-6">
                            <p>The requirements for the bachelor of science and arts degree are designed to give each student an opportunity to combine a core mathematics or science experience with an interdisciplinary curriculum.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Certification: Elements of Computing
                        </a>
                      </h4>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                      <div className="panel-body">
                        <p>Received July 2016 from UT Austin: The Elements of Computing certificate program offers a set of courses intended to help students understand the sophisticated technologies they use everyday as well as gain the computer skills that employers value. The goals of the program are to:</p>
                        <ul>
                          <li>Provide students with knowledge of computer science that employers find valuable</li>
                          <li>Support study in other disciplines requiring computational proficiency</li>
                        </ul>
                        <p><a href="./resume/cs_cert.pdf" download>Certificate</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingThree">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Certification: Business Foundations
                        </a>
                      </h4>
                    </div>
                    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                      <div className="panel-body">
                        <p>Received January 2016 from UT Austin: The Texas Business Foundations Program gives undergraduate students from any discipline a fundamental background in business. This certificate program allows you to supplement a non-business course of study with the business knowledge necessary to turn your passion into a successful career.</p>
                        <p><a href="./resume/bfp_cert.pdf" download>Certificate</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingFour">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Certification: SQL
                        </a>
                      </h4>
                    </div>
                    <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                      <div className="panel-body">
                        <p>Received October 2017 from Udemy: Learned how to read and write complex queries to a database using one of the most in demand skills - PostgreSQL. These skills are also applicable to any other major SQL database, such as MySQL, Microsoft SQL Server, Amazon Redshift, Oracle, and much more.</p>
                        <p><a href="./resume/sql_cert.pdf" download>Certificate</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
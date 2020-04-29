import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Read</span>
					<h2 className="colorlib-heading">Recent Blog</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="https://medium.com/@shuklabarkha17/system-design-part-1-interview-prep-73591dd638a" className="blog-img" target="_blank" rel="noopener noreferrer"><img src="images/blog-1.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>April 23, 2020 </small> | <small> System Design </small>{/*  | <small> <i className="icon-bubble3" /> 4</small> */}</span>
							<h3><a href="https://medium.com/@shuklabarkha17/system-design-part-1-interview-prep-73591dd638a" target="_blank" rel="noopener noreferrer">System Design : Concepts</a></h3>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
					<div className="blog-entry">
						<a href="https://medium.com/@shuklabarkha17/system-design-messaging-service-ed1483020a40" target="_blank" rel="noopener noreferrer" className="blog-img"><img src="images/blog-2.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>April 25, 2020 </small> | <small> System Design </small>{/*  | <small> <i className="icon-bubble3" /> 4</small> */}</span>
							<h3><a href="https://medium.com/@shuklabarkha17/system-design-messaging-service-ed1483020a40" target="_blank" rel="noopener noreferrer">System Design : Messenger App</a></h3>
						</div>
					</div>
					</div>
					
				</div>
				{/* <div className="row">
					<div className="col-md-12 animate-box">
					<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
					</div>
				</div> */}
			</div>
			</section>
      </div>
    )
  }
}
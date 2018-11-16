import React from "react";
import "./test.css";
const Auth = props => {
	return (
		<div className="wrapper">
			<div className="page-header">
				<div className="page-header-image" />
				<div className="content">
					<div className="container">
						<div className="row">
							<div className="col-lg-5 col-md-6 offset-lg-0 offset-md-3">
								<div id="square7" className="square square-7" />
								<div id="square8" className="square square-8" />
								<div className="card card-register">
									<div className="card-header">
										<img
											className="card-img"
											src="../assets/img/square1.png"
											alt="Card image"
										/>
										<h4 className="card-title">Register</h4>
									</div>
									<div className="card-body">
										<form className="form">
											<div className="input-group">
												<div className="input-group-prepend">
													<div className="input-group-text">
														<i className="tim-icons icon-single-02" />
													</div>
												</div>
												<input
													type="text"
													className="form-control"
													placeholder="Full Name"
												/>
											</div>
											<div className="input-group">
												<div className="input-group-prepend">
													<div className="input-group-text">
														<i className="tim-icons icon-email-85" />
													</div>
												</div>
												<input
													type="text"
													placeholder="Email"
													className="form-control"
												/>
											</div>
											<div className="input-group">
												<div className="input-group-prepend">
													<div className="input-group-text">
														<i className="tim-icons icon-lock-circle" />
													</div>
												</div>
												<input
													type="text"
													className="form-control"
													placeholder="Password"
												/>
											</div>
											<div className="form-check text-left">
												<label className="form-check-label">
													<input
														className="form-check-input"
														type="checkbox"
													/>
													<span className="form-check-sign" />
													I agree to the
													<a href="javascript:void(0)">
														terms and conditions
													</a>
													.
												</label>
											</div>
										</form>
									</div>
									<div className="card-footer">
										<a
											href="javascript:void(0)"
											className="btn btn-info btn-round btn-lg"
										>
											Get Started
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="register-bg" />
						<div id="square1" className="square square-1" />
						<div id="square2" className="square square-2" />
						<div id="square3" className="square square-3" />
						<div id="square4" className="square square-4" />
						<div id="square5" className="square square-5" />
						<div id="square6" className="square square-6" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Auth;

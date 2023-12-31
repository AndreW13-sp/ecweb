import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
	const [formData, setFormData] = useState({ email: "", password: "", confirmPassword: "" });

	const handleInputChange = useCallback((event) => {
		const { name, value } = event.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	}, []);

	return (
		<section className="container forms">
			<div className="form signup">
				<div className="form-content">
					<header>Signup</header>
					<form>
						<div className="field input-field">
							<input
								type="email"
								name="email"
								placeholder="Email"
								className="input"
								value={formData.email}
								onChange={handleInputChange}
							/>
						</div>
						<div className="field input-field">
							<input
								type="password"
								name="password"
								placeholder="Create password"
								className="password"
								value={formData.password}
								onChange={handleInputChange}
							/>
						</div>
						<div className="field input-field">
							<input
								type="password"
								name="confirmPassword"
								placeholder="Confirm password"
								className="password"
								value={formData.confirmPassword}
								onChange={handleInputChange}
							/>
							<i className="bx bx-hide eye-icon"></i>
						</div>
						<div className="field button-field">
							<button>Signup</button>
						</div>
					</form>
					<div className="form-link">
						<span>
							Already have an account?{" "}
							<Link to="/login" className="link login-link">
								Login
							</Link>
						</span>
					</div>
				</div>
				<div className="line"></div>
				<div className="media-options">
					<Link to="#" className="field facebook">
						<i className="bx bxl-facebook facebook-icon"></i>
						<span>Login with Facebook</span>
					</Link>
				</div>
				<div className="media-options">
					<Link to="#" className="field google">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
							alt=""
							className="google-img"
						/>
						<span>Login with Google</span>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default SignUp;

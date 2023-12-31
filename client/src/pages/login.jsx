import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

function Login() {
	const [formData, setFormData] = useState({ email: "", password: "" });
	const [showPassword, setShowPassword] = useState(false);

	const handleInputChange = useCallback((event) => {
		const { name, value } = event.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	}, []);

	return (
		<section className="container forms">
			<div className="form login">
				<div className="form-content">
					<header>Login</header>
					<form>
						<div className="field input-field">
							<input
								type="email"
								placeholder="Email"
								className="input"
								name="email"
								value={formData.email}
								onChange={handleInputChange}
							/>
						</div>
						<div className="field input-field">
							<input
								type={showPassword ? "text" : "password"}
								placeholder="Password"
								className="password"
								name="password"
								value={formData.password}
								onChange={handleInputChange}
							/>
							<i
								className="bx bx-hide eye-icon"
								onClick={() => setShowPassword((visible) => !visible)}
							></i>
						</div>
						<div className="form-link">
							<Link to="#" className="forgot-pass">
								Forgot password?
							</Link>
						</div>
						<div className="field button-field">
							<button>Login</button>
						</div>
					</form>
					<div className="form-link">
						<span>
							{"Don't have an account?"}{" "}
							<Link to="/signup" className="link signup-link">
								Signup
							</Link>
						</span>
					</div>
				</div>
				<div className="line"></div>
				<div className="media-options">
					<a href="#" className="field facebook">
						<i className="bx bxl-facebook facebook-icon"></i>
						<span>Login with Facebook</span>
					</a>
				</div>
				<div className="media-options">
					<a href="#" className="field google">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png"
							alt=""
							className="google-img"
						/>
						<span>Login with Google</span>
					</a>
				</div>
			</div>
		</section>
	);
}

export default Login;

import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../store/auth";
import { axiosInstance } from "../utils";

function Login() {
	const [formData, setFormData] = useState({ email: "", password: "" });
	const [showPassword, setShowPassword] = useState(false);
	const { setUser, setToken } = useAuth((state) => ({
		setUser: state.setUser,
		setToken: state.setToken,
	}));
	const navigate = useNavigate();

	const handleInputChange = useCallback((event) => {
		const { name, value } = event.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	}, []);

	const handleSubmit = useCallback(
		async (event) => {
			event.preventDefault();

			// Validate the form data before sending it to the server
			if (!formData.email || !formData.password) {
				alert("Please enter all the fields");
				return;
			}

			try {
				const { data } = await axiosInstance.post("/auth/login", formData);
				const { user, access_token } = data.data;
				// Set the auth state
				setUser(user);
				setToken(access_token);
				// Redirect to home page after successful login
				navigate("/");
			} catch (err) {
				console.log(err);
			}
		},
		[formData, navigate, setToken, setUser]
	);

	return (
		<section className="container forms">
			<div className="form login">
				<div className="form-content">
					<header>Login</header>

					<form onSubmit={handleSubmit}>
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
							<button type="submit">Login</button>
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

export default Login;

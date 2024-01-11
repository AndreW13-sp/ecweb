import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { publicApi } from "../utils";

function SignUp() {
	const [formData, setFormData] = useState({ email: "", password: "", username: "" });
	const { user, setUser } = useAuth((state) => ({ setUser: state.setUser, user: state.user }));
	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			navigate("/");
		}
	}, [navigate, user]);

	const handleInputChange = useCallback((event) => {
		const { name, value } = event.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	}, []);

	const handleSubmit = useCallback(
		async (event) => {
			event.preventDefault();
			if (!formData.username || !formData.email || !formData.password) {
				alert("Please enter all the fields");
				return;
			}

			try {
				const { data } = await publicApi.post("/auth/register", formData);
				const { _id, username, email } = data.data;
				setUser({ id: _id, username, email });
				navigate("/login");
			} catch (err) {
				console.log(err);
				if (err?.response.status === 409) {
					alert("Email is already in use. Please enter a different email address");
				}
			}
		},
		[formData, navigate, setUser]
	);

	return (
		<section className="container forms">
			<div className="form signup">
				<div className="form-content">
					<header>Signup</header>

					<form onSubmit={handleSubmit}>
						<div className="field input-field">
							<input
								type="text"
								name="username"
								placeholder="Username"
								className="input"
								value={formData.username}
								onChange={handleInputChange}
							/>
						</div>

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
